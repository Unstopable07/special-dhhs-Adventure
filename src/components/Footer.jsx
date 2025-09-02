import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000115]  text-white p-5 lg:p-20 gap-10 lg:justify-between lg:flex lg">
      <div className="space-y-5 flex flex-row lg:flex-col gap-5 m-2">
        <h1 className="font-bold  text-[20px] lg:text-[20px]">Contact DHHS For Assistance</h1>
        <h2 className="text-[10px]">Get in touch for grants and loans support within the united states.</h2>
        <img src="Images/seal dhhs.svg" alt="" className="h-[100px] lg:h-[200px]"  />
      </div>
      <div className="space-y-5 items-center">
      <div className=" rounded-2xl gap-5  space-y-5 lg:flex lg:gap-5">
        
        <input type="Name" placeholder="Name" className="rounded-sm text-left bg-[#4c566a]"/>

        <input type="email" placeholder="Email" className="rounded-sm text-left bg-[#4c566a] "/>
      </div>

      <div className=" flex flex-col gap-5">
        <input type="text"
        placeholder="Message" className="bg-[#4c566a] rounded-xl text-center h-[120px]"/>
        <a
          href="mailto:DHHSUPP0RT@hotmail.com.com?subject=Grant%20Inquiry&body=Hello%20DHHS%2C%20I%20need%20assistance%20with..."
          className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors inline-block text-center"
        >
          Submit
        </a>
      </div>
      </div>
    </footer>
  );
}
