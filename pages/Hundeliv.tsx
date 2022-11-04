import Head from "next/head";
import React from "react";
import Header from "../components/Header";

function Hundeliv() {
  return (
    <>
      <Head>
        <title> ET HUNDECAFÉLIV I OSLO</title>{" "}
        <link rel="icon" href="/dog2.png" />
      </Head>
      <Header />
    </>
  );
}

export default Hundeliv;
