"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import Link from "next/link";
import Faq from "./Faq";

export function ProductScroll() {
  const [image, setImage] = useState("/cooler1.jpg");

  return (
    <div className="grid gap-20 pb-10 grid-cols-2 max-md:grid-cols-1">
      <div className="max-h-fit">
        <div className="flex flex-col col-span-1 gap-2">
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-5 w-full gap-2">
            <Image
              onClick={() => setImage("/cooler2.jpg")}
              src={"/cooler2.jpg"}
              alt=""
              width={100}
              height={100}
              className="rounded-lg w-full cursor-pointer"
            />
            <Image
              onClick={() => setImage("/cooler3.jpg")}
              src={"/cooler3.jpg"}
              alt=""
              width={100}
              height={100}
              className="rounded-lg w-full cursor-pointer"
            />
            <Image
              onClick={() => setImage("/cooler4.jpg")}
              src={"/cooler4.jpg"}
              alt=""
              width={100}
              height={100}
              className="rounded-lg w-full cursor-pointer"
            />
            <Image
              onClick={() => setImage("/cooler5.jpg")}
              src={"/cooler5.jpg"}
              alt=""
              width={100}
              height={100}
              className="rounded-lg w-full cursor-pointer"
            />
            <Image
              onClick={() => setImage("/cooler6.jpg")}
              src={"/cooler6.jpg"}
              alt=""
              width={100}
              height={100}
              className="rounded-lg w-full cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto h-full col-span-1 gap-2">
        <span className="text-xs">OUR BESTSELLER</span>
        <h1 className="text-5xl font-semibold">
          Plastic Portable Mini Air Cooler
        </h1>
        <div className="flex gap-3  items-center">
          <div className="flex gap-1 items-center text-xl text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          Top Rated Choice
        </div>
        <div className="flex gap-2 items-center">
          <p className="line-through">Rs. 2,499.00</p>
          <p>Rs. 1,299.00</p>
          <span className="bg-blue-500 text-white px-4 text-sm py-1 rounded-full">
            SALE
          </span>
        </div>
        <span>Inclusive of all taxes.</span>
        <Link href={"/"}>
          <button className="w-full py-2 flex gap-2 items-center justify-center bg-green-400 rounded-md text-lg font-semibold text-white">
            <FaCartShopping /> BUY NOW
          </button>
        </Link>
        <p>
          <span className="font-semibold">
            Introducing the Plastic Portable Mini Air Cooler
          </span>{" "}
          - the ultimate blend of innovation, entertainment, and excitement for
          all ages! This cutting-edge flying toy will take your playtime to new
          heights, quite literally.
        </p>
        <video
          src="1.mp4"
          className="w-[50%] my-4 rounded-xl"
          autoPlay
          muted
          loop
        ></video>
        <p>
          <span className="font-semibold">Experience the Thrill of Flight</span>{" "}
          The MagicalFlying Spinner is not your ordinary toy. It's a
          gravity-defying, spinning marvel that lets you soar through the skies
          with ease. Powered by advanced gyroscopic technology, this spinner
          effortlessly hovers in mid-air, allowing you to control its flight
          with precision. It's a captivating spectacle that brings out the pilot
          in everyone.
        </p>
        <video
          src="2.mp4"
          className="w-[50%] my-4 rounded-xl"
          autoPlay
          muted
          loop
        ></video>
        <p>
          <span className="font-semibold">Experience the Thrill of Flight</span>{" "}
          The MagicalFlying Spinner is not your ordinary toy. It's a
          gravity-defying, spinning marvel that lets you soar through the skies
          with ease. Powered by advanced gyroscopic technology, this spinner
          effortlessly hovers in mid-air, allowing you to control its flight
          with precision. It's a captivating spectacle that brings out the pilot
          in everyone.
        </p>
        <span className="text-red-400 font-bold py-4 text-lg">
          🎁It's a perfect gift for your family!
        </span>
        <Faq />
      </div>
    </div>
  );
}
