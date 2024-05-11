"use client"

import { useContext, useState } from "react";
import { AuthContext } from "@/app/provider";
import SocialLogin from "../socialLogin/SocialLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { successToast, faildToast, login } = useContext(AuthContext);
    const router = useRouter();

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        setError('');
        e.preventDefault();
        if (formData.password.length < 6 || !/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(formData.password)) {
            setError("Invalid Password!");
            faildToast();
            return;
        } else {
            login(formData.email, formData.password)
                .then(() => {
                    router.push(router.query.redirect || "/");
                    successToast();
                })
                .catch(err => {
                    if (err.message === "Firebase: Error (auth/invalid-login-credentials).") {
                        setError("Invalid email and password!");
                    }
                    faildToast();
                });
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] flex flex-col items-center pb-32">
            <div className=" border-none p-5 text-white md:w-[500px] w-full rounded-xl px-9 py-11">
                <h3 className="text-3xl font-bold text-white text-center pb-5">Log In</h3>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 mt-3">
                        <label htmlFor="email" className="text-xl pl-3">Email</label>
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
                        <label htmlFor="password" className="text-xl pl-3">Password</label>
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
                    {error && <p className="text-sm text-red-700">{error}</p>}
                    <div>
                        <button type="submit" className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg w-full mt-4">Submit</button>
                    </div>
                    <div className="mt-3 flex items-center justify-center">
                        <p className="text-sm text-white font-medium">Do not have an account? <Link href="/sign-up" className="text-[#be006b]">Sign Up</Link></p>
                    </div>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
