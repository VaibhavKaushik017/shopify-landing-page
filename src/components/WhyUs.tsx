import React from "react";

function WhyUs() {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-4">Why buy from us?</h1>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3 h-fit w-[150px]">
          <img src="f2.png" className="h-full w-full" />
          <h2 className="text-xl text-center">Enjoy Free & Fast Shipping!</h2>
        </div>
        <div className="flex flex-col gap-3 h-fit w-[150px]">
          <img src="f3.png" className="h-full w-full" />
          <h2 className="text-xl text-center">Lowest prices offered!</h2>
        </div>
        <div className=" flex flex-col gap-3 h-fit w-[150px]">
          <img src="f5.png" className="h-full w-full" />
          <h2 className="text-xl text-center">Cash on Delivery Available!</h2>
        </div>
        <div className=" flex flex-col gap-3 h-fit w-[150px]">
          <img src="f6.png" className="h-full w-full" />
          <h2 className="text-xl text-center">
            24/7 Customer Support Available!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
