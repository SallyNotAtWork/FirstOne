import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Steder() {
  return (
    <>
      <Head>
        <title> STEDER Å GÅ MED HUND</title>{" "}
        <link rel="icon" href="/dog2.png" />
      </Head>
      <Header />
      <Footer />
    </>
  );
}

export default Steder;
