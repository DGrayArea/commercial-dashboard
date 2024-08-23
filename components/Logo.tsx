import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Image width={300} height={200} alt="logo" src="/logo.png" />
    </div>
  );
};

export default Logo;
