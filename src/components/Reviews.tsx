import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

function Reviews() {
  return (
    <div className="flex flex-col gap-10 my-14">
      <h1 className="font-semibold text-xl text-center">Customer Reviews</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-xl text-yellow-500 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>2 weeks ago</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdPerson className="border text-3xl" />
            <p>Vaibhav</p>
          </div>
          <h2 className="font-semibold">Fun for kids</h2>
          <p>My kid felt very happy while playing with the toy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-xl text-yellow-500 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>2 weeks ago</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdPerson className="border text-3xl" />
            <p>Vaibhav</p>
          </div>
          <h2 className="font-semibold">Fun for kids</h2>
          <p>My kid felt very happy while playing with the toy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-xl text-yellow-500 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>2 weeks ago</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdPerson className="border text-3xl" />
            <p>Vaibhav</p>
          </div>
          <h2 className="font-semibold">Fun for kids</h2>
          <p>My kid felt very happy while playing with the toy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-xl text-yellow-500 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>2 weeks ago</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdPerson className="border text-3xl" />
            <p>Vaibhav</p>
          </div>
          <h2 className="font-semibold">Fun for kids</h2>
          <p>My kid felt very happy while playing with the toy</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-xl text-yellow-500 flex gap-2 items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>2 weeks ago</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <IoMdPerson className="border text-3xl" />
            <p>Vaibhav</p>
          </div>
          <h2 className="font-semibold">Fun for kids</h2>
          <p>My kid felt very happy while playing with the toy</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
