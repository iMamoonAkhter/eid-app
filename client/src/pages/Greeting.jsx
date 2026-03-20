/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import GreetingCard from '../components/GreetingCard'
import GreetingWishes from '../components/GreetingWishes'
import FloatingSideDecor from '../components/FloatingSideDecor'

export default function Greeting({ name, setName }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showConfetti, setShowConfetti] = useState(false)

  // Parse username from URL path: /name=Mamoon%20Akhter
  const parseNameFromPath = () => {
    const pathname = location.pathname
    if (pathname.startsWith('/name=')) {
      const encodedName = pathname.substring(6) // Remove '/name=' prefix
      return decodeURIComponent(encodedName)
    }
    return null
  }

  const urlName = parseNameFromPath()
  // Use URL name first, then fall back to state
  const displayName = urlName || name

  // If not on a greeting path, redirect to home
  useEffect(() => {
    if (!location.pathname.startsWith('/name=')) {
      navigate('/')
      return
    }
  }, [location.pathname, navigate])

  // Update app state when URL parameter changes
  useEffect(() => {
    if (urlName) {
      setName(urlName)
    }
  }, [urlName, setName])

  // Redirect to home if no name found in URL or state
  useEffect(() => {
    if (!displayName) {
      navigate('/')
      return
    }
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 2600)
    return () => clearTimeout(timer)
  }, [displayName, navigate])

  const handleShare = () => {
    alert(`Share this Eid wish for ${displayName}!`)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 overflow-hidden"
    >
      <FloatingSideDecor />
      <div className="star-dot" style={{ top: '15%', left: '14%', width: '7px', height: '7px' }} />
      <div className="star-dot" style={{ top: '25%', right: '16%', width: '5px', height: '5px' }} />
      <div className="moon-emoji" style={{ top: '8%', left: '15%' }}>🌟</div>

      <AnimatePresence mode="wait">
        {displayName && (
          <GreetingCard
            userName={displayName}
            onBack={() => navigate('/')}
            onShare={handleShare}
          />
        )}
      </AnimatePresence>

      {displayName && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mt-12 max-w-5xl mx-auto"
        >
          <GreetingWishes />
        </motion.div>
      )}

      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              animate={{ opacity: 0, y: 300 + Math.random() * 60, x: (Math.random() - 0.5) * 300, rotate: 360 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="absolute w-2 h-2 rounded-full shadow-lg"
              style={{
                top: '20%',
                left: `${5 + i * 3.5}%`,
                backgroundColor: ['#FDE68A', '#FCD34D', '#FBBF24'][i % 3],
              }}
            />
          ))}
        </div>
      )}
    </motion.main>
  )
}
