"use client";
import { AuthContext } from "@/app/provider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";

const Card = ({ product, index }) => {
  const { successToast, faildToast, networkFaildToast, creatUres, user,isLoading } = useContext(AuthContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [addCartIndex, setAddCardIndex] = useState(null);
  const [loggedIn, setLoggedin ] = useState();

  useEffect(() => { 
    if(user){
      setLoggedin(user)
    }
   },[user])

   console.log(product)

   const handleAddToCart = () => { 
    if(!isLoading && loggedIn){
      const loader = async () => { 
        const res = await fetch(`https://summerfield.store/cart/${user?.reloadUserInfo?.email}`,{
          method: "POST",

        })
        
       }
    }
    }


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleCart = async (index) => { 
    setAddCardIndex(index);
    
   }

  return (
    <Link
    href={`/product/${product.id}`}
      key={product.id}
      className="w-full border rounded-md relative"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={`https://summerfield.store${product.images[0].thumb}`}
        width={400}
        height={100}
        alt={product.title}
        className="rounded-t rounded-md rounded-b-none"
      />
      <div
        className={`absolute w-full top-64 left-0 transition-opacity duration-500 ${
          hoveredIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="bg-gradient-to-r from-[#09195a] to-[#0984c8] py-4 w-full text-white text-xs font-semibold hover:from-[#0984c8] hover:to-[#0984c8] active:opacity-35">
          ADD TO CART
        </button>
      </div>
      <p className="text-xs text-center ">
        <span className="text-gray-400 hover:text-black">
          {product?.category?.sub}
        </span>
        ,{" "}
        <span className="text-gray-400 hover:text-black">
          {product?.category?.imd}
        </span>
      </p>
      <h4 className="mt-1 px-8 text-wrap text-center text-[#09195a] hover:text-[#0984c8]">
        {product?.title}
      </h4>
      <div className="flex justify-center gap-3 my-1">
        <h5 className="text-center text-[#ef837b] text-lg font-semibold">
          ৳ {product?.selling_price}
        </h5>
        <h5 className="text-center text-[#ccc] text-lg font-semibold line-through">
          ৳ {product?.marked_price}
        </h5>
      </div>
      <div className="flex gap-3 justify-center items-center mb-5">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={18}
          value={product?.rating || 0}
          color2={"#ffd700"}
        />
        <p className="text-xs text-gray-600">
          ({product?.rating || 0} Reviews)
        </p>
      </div>
    </Link>
  );
};

export default Card;
