import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderHeader from "../components/HeaderHeader";
import SideOne from "../components/SideOne";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HUND I OSLO</title>
        <link rel="icon" href="/dog2.png" />
      </Head>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <HeaderHeader />
        <SideOne />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
