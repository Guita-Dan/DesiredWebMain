'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = ({ t }) => {

  const projects = [
    {
      title: t?.projects?.ecommercePlatform?.title,
      description: t?.projects?.ecommercePlatform?.description,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      title: t?.projects?.socialMediaDashboard?.title,
      description: t?.projects?.socialMediaDashboard?.description,
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      title: t?.projects?.fitnessTrackingApp?.title,
      description: t?.projects?.fitnessTrackingApp?.description,
      image: '/placeholder.svg?height=300&width=400'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t?.projects?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

