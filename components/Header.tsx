import React from "react";

function Header() {
  return (
    <div className="flex flex-row items-center px-4 py-4 space-x-5 shadow-md bg-white">

      <div className="flex-none ">
       <a href="/">
            <img
              className="h-8 w-auto"
              src="/dogpaw.png"
              alt=""
            />
        </a>
        </div>
        
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
 
  );
}

export default Header;
