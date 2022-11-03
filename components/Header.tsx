import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-center text-3xl ">
        {"HUND I OSLO - ENKLERE LIV MED HUND"}
      </div>
      <div className="flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink" href="/">HUND I OSLO - HVOR KAN DU GÅ?</a>
        <a className="headerLink" href="/Steder">STEDER Å GÅ MED HUND</a>
        <a className="headerLink">ET HUNDECAFÉLIV I OSLO</a>
      </div>
    </header>
  );
}

export default Header;
