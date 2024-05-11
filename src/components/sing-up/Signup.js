"use client";
import { useState, useContext } from "react";
import SocialLogin from "../socialLogin/SocialLogin";
import { AuthContext } from "@/app/provider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const { successToast, faildToast, networkFaildToast, creatUres, user } =
    useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkbox: false,
  });
  const [error, setError] = useState("");

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(user);
  const userd = {
    first_name: formData?.name?.split(" ")[0],
    last_name: formData?.name?.split(" ")[1],
    email: formData.email,
    password: formData.password,
    image: File,
  };
  console.log(userd);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Password must be 6 characters or more!");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(formData.password)) {
      setError("Password must need one upper case, one special character!");
      return;
    } else {
      try {
        // await creatUres(formData.email, formData.password);
        // router.push("/");
        const res =await axios.post(`https://summerfield.store/register/`, userd);
        console.log(res)
        successToast();
      } catch (err) {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("This email is already used!");
        } else if (
          err.message === "Firebase: Error (auth/network-request-failed)."
        ) {
          networkFaildToast();
        } else {
          faildToast();
        }
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] flex flex-col items-center pb-32">
      <div className=" p-5 text-white md:w-[500px] w-full rounded-xl px-9 py-11">
        <h3 className="text-3xl font-bold text-white text-center pb-5">
          Sign Up
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mt-3">
            <label htmlFor="name" className="text-xl pl-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormData}
              required
              className="w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
            />
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <label htmlFor="email" className="text-xl pl-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormData}
              required
              className="w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
            />
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <label htmlFor="password" className="text-xl pl-3">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleFormData}
              required
              className="w-full text-xl py-2 bg-[#1c123f] border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
            />
          </div>
          <div className="flex items-center gap-3 mt-3 px-3">
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleFormData}
              required
              className=""
            />
            <label htmlFor="checkbox" className="md:text-xl text-lg pl-3">
              Accept our Terms & Conditions.
            </label>
          </div>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <div>
            <button
              type="submit"
              className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg w-full mt-4"
            >
              Submit
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <p className="text-sm text-white font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-[#be006b]">
                Log In
              </Link>
            </p>
          </div>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Signup;
