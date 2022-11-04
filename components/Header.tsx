import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/8">
        <Link href="/">
          <div className="relative w-10 cursor-pointer opacity-75 h-10 transition hover:opacity-100">
            <Image
              src={"/../public/static/img/dogpaw.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="flex-1 items-center justify-center space-x-8 md:flex">
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
