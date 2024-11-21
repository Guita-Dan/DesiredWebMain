'use server'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Contact from '../components/Contact'
import { getDictionary } from './dictionaries'


export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const dict = await getDictionary(lang)
  return (
    <>
      <Hero t={dict} />
      <Services t={dict} />
      <Projects t={dict} />
      <Team t={dict} />
      <Contact t={dict} />
    </>
  )
}

