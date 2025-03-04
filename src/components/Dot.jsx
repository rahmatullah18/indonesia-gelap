import React from "react";

const Dot = ({ number, text, className, value }) => {
  return (
    <div
      className={`${className} lg:block w-5 h-5 rounded-full bg-white/80 z-20 hover:z-30 shadow-2xl shadow-yellow-500`}
    >
      <div className="group ">
        <div className="w-5 h-5  cursor-pointer rounded-full flex justify-center items-center">
          <span className="text-xs font-semibold">{number}</span>
          <div
            className={`absolute bottom-full  left-1/2  -translate-x-1/2 mb-3  min-w-40  transition-all duration-300  ease-in-out group-hover:opacity-100  hover:scale-110 ${
              value ? "opacity-100" : "opacity-20"
            }`}
          >
            <div className="relative px-4 py-2 text-sm text-white bg-white rounded-lg shadow-2xl border border-black">
              <p className=" text-xs text-black">{text}</p>
              <span className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 bg-white rotate-45"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dot;
