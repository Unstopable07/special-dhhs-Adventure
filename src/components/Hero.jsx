import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#1830d3]   justify-items-center p-5 space-y-5 ">
      <h1 className="font-bold text-white text-[20px] lg:text-[30px] ">
        Explore Personalised Funding Solutions
      </h1>
      <div className="text-white lg:grid-cols-2 grid grid-cols-1 gap-10  ">
        <div className="space-y-2">
          <img
            src="Images/grantss.jpg"
            alt=""
            className="rounded-2xl lg:rounded-3xl h-[300px] w-[450px]"
          />
          <h1 className="font-bold text-[25px]">
            Financial Assistance Programs
          </h1>
          <h2>Provide Cash Assistance to people in need </h2>
          <a
            href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
            className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
          >
            More info
          </a>
        </div>
        <div className="space-y-2">
          <img
            src="Images/health funding.jpg"
            alt=""
            className="rounded-2xl lg:rounded-3xl h-[300px] w-[450px]"
          />
          <h1 className="font-bold text-[25px]">Health Funding Options</h1>
          <h2>
            Provide Funding to people with health issues and dissabilities{" "}
          </h2>
          <a
            href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
            className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
          >
            More info
          </a>
        </div>
        <div className="space-y-2">
          <img
            src="Images/sponsor.jpg"
            alt=""
            className="rounded-2xl lg:rounded-3xl h-[300px] w-[450px]"
          />
          <h1 className="font-bold text-[25px]">
            Educational Grants Support Grants
          </h1>
          <h2>provide grants to people in need of educational assitance </h2>
          <a
            href="mailto:DHHSUPP0RT@hotmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
            className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
          >
            More info
          </a>
        </div>
        <div className="space-y-2">
          <img
            src="Images/winner1.jpg"
            alt=""
            className="rounded-2xl lg:rounded-3xl h-[300px] w-[450px]"
          />
          <h1 className="font-bold text-[25px]">Retired Grants and loans</h1>
          <h2>provide cash grants to retired, old and unemployed citizens.</h2>
          <a
            href="mailto:dhhsupport@gmail.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
            className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
}
