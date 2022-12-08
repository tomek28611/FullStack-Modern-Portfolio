import type { NextPage } from 'next';
import Head from 'next/head'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience';
import styles from '../styles/Home.module.css'
import ContactMe from '../components/ContactMe';
import Link from 'next/link';

const Home: NextPage = () => {
  return (

    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section className="snap-start" id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section className="snap-start" id="projects">
        <Projects />
      </section>

      {/* Comtact */}
      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className="flex items-center justify-center">
          <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
          src="home.png" alt="" />
        </div>
        </footer>

      </Link>

    </div>
  )
}

export default Home;