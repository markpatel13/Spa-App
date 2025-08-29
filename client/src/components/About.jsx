import React from "react";
import bg from "../assets/bg.jpg";
import img from "../assets/img.jpg";
import touch from "../assets/touch.png";
import truck from "../assets/truck.png";
import location from "../assets/location.png";
import home from "../assets/home.png";

function About() {
  return (
    <div className="bg-gray-300">
      {/* Top Banner */}
      <div className="w-full mx-auto">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="bg-cover bg-center bg-no-repeat w-full h-full"
        >
          <p className="py-[200px] md:p-[200px] text-[#3a5b28] font-bold text-5xl text-center">
            About Us
          </p>  
        </div>
      </div>

      {/* Spa Services Section */}
      <div className="w-full max-w-6xl mx-auto space-x-4 space-y-4 justify-around p-4">
        <h1 className="text-3xl font-bold">Spa Services</h1>
        <div className="sm:flex sm:flex-row-reverse grid place-items-center">
          <div></div>
          <div className="flex place-items-center">
            <img className="w-full max-w-md" src={img} alt="Spa service" />
          </div>
          <div className="bg-[#3a5b28] hidden sm:flex w-1 mx-2 h-52 rounded-full"></div>
          <div className="w-full">
            <div className="space-y-3">
              <p className="text-[#726d6d]">
                Spa philosophy : Share the mission and values behind the spa.
                History: Briefly outline the spa's journey and milestones. Team:
                Introduce the spa's expert staff, including therapists and
                specialists. Spa facilities: Describe the amenities, including
                sauna, steam room, Jacuzzi, relaxation lounges, and unique
                features.
              </p>
              <button className="bg-[#3a5b28] px-4 py-2 font-medium rounded-md text-white">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Title */}
      <div className="my-6">
        <div className="text-2xl font-semibold text-center">How It Works</div>
        <div className="mx-auto h-[2px] rounded-md w-24 bg-[#3a5b28]"></div>
      </div>

      {/* How It Works - Step 1 & 2 */}
      <div className="sm:flex w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#3a5b28] rounded-full max-w-max p-3 mx-auto">
            <img src={touch} alt="Touch icon" />
          </div>
          <span className="text-center text-lg font-bold">Book In Just 2 Taps</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#3a5b28] rounded-full max-w-max p-3 mx-auto">
            <img src={truck} alt="Truck icon" />
          </div>
          <span className="text-center text-lg font-bold">Get a Therapist</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </div>
        </div>
      </div>

      {/* How It Works - Step 3 & 4 */}
      <div className="sm:flex w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#3a5b28] rounded-full max-w-max p-3 mx-auto">
            <img src={location} alt="Location icon" />
          </div>
          <span className="text-center text-lg font-bold">Track Your Therapist</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#3a5b28] rounded-full max-w-max p-3 mx-auto">
            <img className="w-20" src={home} alt="Home icon" />
          </div>
          <span className="text-center text-lg font-bold">Massage Safely</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
