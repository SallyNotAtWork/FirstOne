import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SideOne from '../components/SideOne'
import Steder from './Steder'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HUND I OSLO - ENKLERE LIV MED HUND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <SideOne/>
    </div>
  )
}

export default Home
