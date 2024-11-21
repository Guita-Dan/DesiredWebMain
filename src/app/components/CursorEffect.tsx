'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        animate={{
          WebkitMaskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent 10%, black 20%)`,
          maskImage: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, transparent 10%, black 20%)`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl"></div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-50 h-6 w-6 rounded-full bg-purple-500 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {isMoving && (
        <motion.div
          className="pointer-events-none fixed z-40 h-6 w-6 rounded-full bg-pink-500 mix-blend-screen"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: [1, 1.5, 0],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </>
  )
}

export default CursorEffect

