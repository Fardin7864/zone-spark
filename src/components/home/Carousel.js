"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const links = [
    "/balls.png",
    "/musical.png",
    "/sharee.png",
    "/watch.png",
    "/caps.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Image
        src={`${links[currentIndex]}`}
        width={2000}
        height={900}
        alt="img"
        className=" mt-2 rounded-xl pr-1"
      />
    </>
  );
};

export default Carousel;
