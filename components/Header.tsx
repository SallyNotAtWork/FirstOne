import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex">


      {/* <div className="flex items-center justify-center md:w-1/8">
        <Link href="/">
          <div className="relative w-10 cursor-pointer opacity-75 h-10 transition hover:opacity-100">
            <Image
              src={"/dogpaw.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="p-4">
        HUND I OSLO - ENKLERE LIV MED HUND
      </div> */}

      
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">

      
       <a href="/">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="/dogpaw.png"
              alt=""
            />
        </a>
       
        <a className="headerLink" href="/">
          HUND I OSLO - HVOR KAN DU GÅ?
        </a>

        <a className="headerLink" href="/Steder">
          STEDER Å GÅ MED HUND
        </a>

        <a className="headerLink" href="/Hundeliv">
          ET HUNDECAFÉLIV I OSLO
        </a>


      </div>
    </header>
  );
}

export default Header;
