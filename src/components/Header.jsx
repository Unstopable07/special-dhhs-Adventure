import React from "react";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="text-left bg-[#000133] p-10 lg:p-20 lg:flex flex-col items-center text-white lg:  justify-center">
        <h1 className="font-bold text-[21px] lg:text-[40px]">
          Finding Solutions For your Needs
        </h1>
        <h2 className="text-[15px] lg:text-[20px]">
          Explore Tailored Grants and loan to support your health and
          initiatives.
        </h2>
      </div>

      <div className="lg:bg-[#000133] ">
        <img
          src="Images\funding 2.jpg"
          alt=""
          className="h-[260px]  lg:w-[900px] lg:h-[550px]"
        />
      </div>
      <div className=" lg:bg-[#000133] bg-none">
        <img
          src="Images/GFund.jpg"
          alt=""
          className=" lg:h-[600px] lg:-[400px]  h-[350px]"
        />
      </div>
      <div className="bg-[#000133] text-left space-y-2 p-10 text-white">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Empower Your Future
        </h1>
        <h2 className="lg:text-[20px]">
          Unlock your opportunities by applying for our programme we provide
          basic ammenities for individuals who wants a brighter tommorow
        </h2>
        <a
          href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
          className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
        >
          Contact
        </a>
      </div>
      <div className="bg-[#000133] text-left space-y-2 p-10 text-white">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Empowering Your Future
        </h1>
        <h2 className="lg:text-[20px]">
          Unlock your opportunities by applying for our programme we provide
          basic ammenities for individuals who wants a brighter tommorow
        </h2>
        <a
          href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
          className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
        >
          Contact
        </a>
      </div>
      <div className=" ">
        <img src="Images\grant.jpg" alt="" />
      </div>
      <div className="bg-[#000133]">
        <img src="Images\cash.jpg" alt="" className="w-[665px] lg:w-[1000px]" />
      </div>
      <div className="bg-[#000133] text-left space-y-2 p-10 text-white">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Empower Your Potential
        </h1>
        <h2 className="lg:text-[20px]">
          Unlock your opportunities by applying for our programme we provide
          basic ammenities for individuals who wants a brighter tommorow
        </h2>
        <a
          href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
          className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
