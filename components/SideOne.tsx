import React from "react";
import Image from "next/image";

function SideOne() {
  return (
    <>
      <p className="text-b text-2xl text-blue-900">
        I menyen over finner du oversikten over steder å gå. Sist oppdatert
        08.10.2022, med kart (se menyvalget "Steder å gå med hund" Tusen takk
        for alle nye tips :-)
      </p>
      <div>
        <Image src="/dogfirstone.png" width={400} height={300} />
      </div>
      <div className="text-2xl text-blue-900">
        På cafe/bar/spisested med hund?
      </div>
      <p>
        Når du har hund kan det være vanskelig å vite hvor du kan ta med hunden
        din hvis du ønsker å ta den med inn på en cafe, en bar, et spisested.
        Når din kjære firbente kanskje har vært alene hele dagen, er det ikke så
        greit å gå ut etter jobb og la hunden være enda mer alene.
      </p>
      <p>
        Hunder er sosiale dyr og å kunne ta vofsen med hvis du skal ut å ta en
        kopp kaffe, en øl, spise et lite måltid, er noe mange ønsker seg. Men
        hvor kan du ta den med? På dette nettstedet gir vi deg noen tips til
        steder hvor hunder er velkommen. Send oss gjerne oppdateringer på nye
        steder eller steder som har "lukket døra" enten for godt eller for å ta
        med hunden. Du når oss på epost: monahovlandjakobsen@gmail.com NB. Tips
        oss gjerne om det er steder som ikke har klart seg gjennom koronakrisen
        og må tas av listen.
      </p>
      <div className="text-xl font-bold"> Se også nyhetsartikkelen på</div>{" "}
      <a href="https://vartoslo.no/antonio-karumadasa-baker-hansen-emma-kjall/til-disse-37-serveringsstedene-i-oslo-kan-du-ta-med-hunden-din-inn/115337">
        <button> VårtOSlo</button>
      </a>
      <div className="text-xl font-bold"> Mattilsynets retningslinjer </div>
      <p>
        Mattilsynet har retningslinjer for hunders adgang til spisesteder og
        disse er ganske åpne for at det er helt ok å tillate hund inne. På
        Mattilsynets sider står det: «Kjæledyr kan ha adgang til steder der
        næringsmidler serveres og omsettes der det ikke er fare for
        mattryggheten. Slike steder kan være i kaféer, restauranter, kaffebarer,
        puber, sportstuer og andre spise- og utsalgsteder. Dette gjelder både
        inne og utendørs. Noen virksomheter som serverer og omsetter mat velger
        uansett å forby adgang for kjæledyr. Dette kan være av andre grunner enn
        å sikre trygg mat.» Hele forskriften kan du lese på nettsidene til
        Mattilsynet.
      </p>
      <div className="text-xl font-bold">
        Vise hensyn og pass godt på hunden
      </div>
      <p>
        Det er viktig at vi som hundeeiere viser hensyn til menneskene rundt
        oss. Noen liker ikke hund, noen er redde og andre allergiske. Oppfører
        vi som hundeeiere oss høflig og pent og vofsen er fin å ha med, blir det
        lettere for de som kommer etter oss. Fyll og hund, hører definitivt ikke
        sammen. Det er heller ikke noe særlig for hunder å være på en bråkete
        plass. Vis hensyn til hunden.
      </p>
    </>
  );
}

export default SideOne;
