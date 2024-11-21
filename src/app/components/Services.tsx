'use client'

import { motion } from 'framer-motion'
import { FaDesktop, FaShoppingCart, FaMobileAlt, FaRocket } from 'react-icons/fa'

const Services = ({t}) => {

  const services = [
    {
      icon: <FaDesktop className="text-4xl mb-4 text-purple-500" />,
      title: t?.services?.webDesign?.title,
      description: t?.services?.webDesign?.description
    },
    {
      icon: <FaShoppingCart className="text-4xl mb-4 text-purple-500" />,
      title: t?.services?.ecommerce?.title,
      description: t?.services?.ecommerce?.description
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-purple-500" />,
      title: t?.services?.mobileApps?.title,
      description: t?.services?.mobileApps?.description
    },
    {
      icon: <FaRocket className="text-4xl mb-4 text-purple-500" />,
      title: t?.services?.webApplications?.title,
      description: t?.services?.webApplications?.description
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t?.services?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

