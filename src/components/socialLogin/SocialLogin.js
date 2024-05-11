"use client"

import { useContext } from "react";
import { AuthContext } from "@/app/provider";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const { socialLogin, google, successToast, failToast } = useContext(AuthContext);
    const router = useRouter();

    const handlePopup = (provider) => {
        toast.error("This feature is not active!")
        // socialLogin(provider)
        //     .then(() => {
        //         router.push(router.query?.state || "/");
        //         successToast();
        //     })
        //     .catch(() => {
        //         failToast();
        //     });
    };

    return (
        <div className=" flex justify-center items-center mt-5">
            <button onClick={() => handlePopup(google)} className=" flex border border-white py-4 w-full rounded-xl justify-center items-center">
                <FcGoogle className="text-xl" /> With Google
            </button>
        </div>
    );
};

export default SocialLogin;
