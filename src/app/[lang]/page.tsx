
'use server'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Contact from '../components/Contact'
import { getDictionary } from './dictionaries'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default async function Home() {

  const dict = await getDictionary('ro');

  return (
    <>
      <Header t={dict} language='ro' />
      <Hero t={dict} />
      <Services t={dict} />
      <Projects t={dict} />
      <Team t={dict} />
      <Contact t={dict} />
      <Footer t={dict} />
    </>

  )
}

