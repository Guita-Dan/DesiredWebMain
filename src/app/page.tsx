
'use server'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Contact from './components/Contact'
import { getDictionary } from './[lang]/dictionaries'
import Footer from './components/Footer'


export default async function Home() {

  const dict = await getDictionary('en');

  return (
    <>
      <Hero t={dict} />
      <Services t={dict} />
      <Projects t={dict} />
      <Team t={dict} />
      <Contact t={dict} />
      <Footer t={dict} />
    </>
  )
}

