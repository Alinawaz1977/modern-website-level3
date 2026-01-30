import React, { useState } from "react";

const Video = () => {
  const [isLoaded, setIsLoaded] = useState(false); // false until video loads

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      {/* Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video */}
      <video
        className="h-screen w-screen object-cover"
        autoPlay
        muted
        loop
        src="https://xgjzloifyvgpbmyonaya.supabase.co/storage/v1/object/public/files/bBj1XfrSyi/1ENIoa5sjq"
        onLoadedData={() => setIsLoaded(true)} // set true when loaded
      ></video>
    </div>
  );
};

export default Video;
