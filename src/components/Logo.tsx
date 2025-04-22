
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 bg-accent-gradient rounded-md flex items-center justify-center mr-2 shadow-lg">
        <span className="text-white font-bold text-xl">K</span>
      </div>
      <div>
        <h1 className="text-white text-xl font-bold font-space">koch.ie</h1>
        <p className="text-gray-400 text-xs -mt-1">koch engineering</p>
      </div>
    </div>
  );
};

export default Logo;
