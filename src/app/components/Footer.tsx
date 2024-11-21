"use client"
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = ({t}) => {

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-purple-500">
              DesiredWeb
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              {t?.footer?.description}
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t?.footer?.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-purple-500 transition duration-300">{t?.nav?.services}</Link></li>
              <li><Link href="#projects" className="text-gray-300 hover:text-purple-500 transition duration-300">{t?.nav?.projects}</Link></li>
              <li><Link href="#team" className="text-gray-300 hover:text-purple-500 transition duration-300">{t?.nav?.team}</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-purple-500 transition duration-300">{t?.nav?.contact}</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">{t?.footer?.connect}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DesiredWeb. {t?.footer?.rights}
        </div>
      </div>
    </footer>
  )
}

export default Footer

