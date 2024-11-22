'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { LangProps } from './types'

const Team = ({t}:LangProps) => {

  const teamMembers = [
    {
      name: t?.team?.johnDoe?.name,
      role: t?.team?.johnDoe?.role,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      name: t?.team?.janeSmith?.name,
      role: t?.team?.janeSmith?.role,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      name: t?.team?.mikeJohnson?.name,
      role: t?.team?.mikeJohnson?.role,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      name: t?.team?.sarahBrown?.name,
      role: t?.team?.sarahBrown?.role,
      image: '/placeholder.svg?height=300&width=300'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t?.team?.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

