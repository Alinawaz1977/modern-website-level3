import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Inner Ring */}
        <div className="absolute inset-2 border-4 border-green-400 border-b-transparent rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;
