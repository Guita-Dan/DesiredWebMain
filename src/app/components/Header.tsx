
'use client'
import { LangProps } from './types'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { Globe } from 'lucide-react'

const Header = ({ t, language }: LangProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  console.log("aici", t)
  const toggleLanguage = () => {
    const newLocale = language === 'en' ? 'ro' : 'en'
    const newPath = `/${newLocale}`
    router.push(newPath)
  }

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          DesiredWeb
        </Link>
        <nav className="hidden md:flex space-x-6">
          {t?.nav?.services && <NavLink href="#services">{t.nav.services}</NavLink>}
          {t?.nav?.projects && <NavLink href="#projects">{t.nav.projects}</NavLink>}
          {t?.nav?.team && <NavLink href="#team">{t.nav.team}</NavLink>}
          {t?.nav?.contact && <NavLink href="#contact">{t.nav.contact}</NavLink>}
          <button
            onClick={toggleLanguage}
            className="text-gray-300 hover:text-purple-500 transition duration-300 flex items-center"
          >
            <Globe className="w-5 h-5 mr-1" />
            {t === 'en' ? 'ro' : 'en'}
          </button>
        </nav>
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 py-2"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {t?.nav?.services && <NavLink href="#services" onClick={() => setIsOpen(false)}>{t.nav.services}</NavLink>}
              {t?.nav?.projects && <NavLink href="#projects" onClick={() => setIsOpen(false)}>{t.nav.projects}</NavLink>}
              {t?.nav?.team && <NavLink href="#team" onClick={() => setIsOpen(false)}>{t.nav.team}</NavLink>}
              {t?.nav?.contact && <NavLink href="#contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</NavLink>}
              <button
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-purple-500 transition duration-300 text-left flex items-center"
              >
                <Globe className="w-5 h-5 mr-1" />
                {t === 'en' ? 'Română' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} className="text-gray-300 hover:text-purple-500 transition duration-300" onClick={onClick}>
    {children}
  </Link>
)

export default Header

