import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <div className="crusor-pointer  relative h-10 w-5 opacity-75 transition hover:opacity-100">
        <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
      </div>
    </header>
  );
}

export default Header;
