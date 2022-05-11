import * as React from "react";
import Image from "next/image";

const Header = () => (
  <div className="w-screen flex justify-center">
    <Image src="/logo.png" alt="logo" width={300} height={150} />
  </div>
);

export default Header;
