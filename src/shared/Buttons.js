"use client"
import toast from "react-hot-toast";

const BecomeSellerBtn = () => {
    const errorToast = () => {
        toast.error("Feature Under constuction!")
     };
      

    return (
        <>
        <button onClick={errorToast} className=" hidden md:block text-xs font-semibold pl-4 hover:text-[#098cd0]">
            Become a Seller
        </button>
        </>
    );
};

export default BecomeSellerBtn;
