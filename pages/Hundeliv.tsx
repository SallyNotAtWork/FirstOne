import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewApp from "../components/NewApp";

const Hundeliv: React.FC = () => {
  return (
    <>
      <Head>
        <title> ET HUNDECAFÉLIV I OSLO</title>{" "}
        <link rel="icon" href="/dog2.png" />
      </Head>
      <Header />
      <NewApp />
      <Footer />
    </>
  );
};

export default Hundeliv;
