import type { NextPage } from 'next';
import Head from 'next/head'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tom's Portfolio</title>
      </Head>
      
      <Header />

      {/* Hero */}
      <section className="snap-start" id="hero">
        <Hero />
      </section>

      {/* About */}
      <section className="snap-center" id="about">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Comtact */}

    </div>
  )
}

export default Home;