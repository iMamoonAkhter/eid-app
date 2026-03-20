/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import GreetingCard from '../components/GreetingCard'
import GreetingWishes from '../components/GreetingWishes'
import FloatingSideDecor from '../components/FloatingSideDecor'
import { recordVisitor } from '../api/visitorAPI'

export default function Greeting({ name, setName }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showConfetti, setShowConfetti] = useState(false)
  const [copied, setCopied] = useState(false)

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

  // Record visitor when URL name is detected (fire-and-forget)
  useEffect(() => {
    if (urlName) {
      recordVisitor(urlName)
    }
  }, [urlName])

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative min-h-screen w-full flex flex-col items-center justify-between px-4 py-6 sm:py-10 overflow-hidden bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900"
    >
      <FloatingSideDecor />
      
      {/* Animated Floating Background Elements */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 left-[8%] text-4xl sm:text-5xl opacity-40 select-none">🏮</motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-40 right-[10%] text-5xl sm:text-6xl opacity-20 select-none">🕌</motion.div>

      <div className="star-dot" style={{ top: '15%', left: '14%', width: '7px', height: '7px' }} />
      <div className="star-dot" style={{ top: '25%', right: '16%', width: '5px', height: '5px' }} />
      <div className="moon-emoji" style={{ top: '8%', left: '15%' }}>🌟</div>

      <div className="relative flex-1 flex flex-col w-full items-center z-10">
        <AnimatePresence mode="wait">
          {displayName && (
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center mt-4 sm:mt-8 px-2 sm:px-6">
              <GreetingCard
                userName={displayName}
                onBack={() => navigate('/')}
                onShare={handleShare}
              />
              
              {/* Interactive Action Buttons */}
              <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 w-full"
>
 <button 
  onClick={handleCopy}
  style={{ padding: '0.75rem 1rem' }} // 12px vertical, 24px horizontal
  className="flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-lg hover:shadow-emerald-500/25"
>
  {copied ? '✅ Copied!' : '📋 Copy Link'}
</button>

<button 
  onClick={handleShare}
  style={{ padding: '0.75rem 1rem' }}
  className="flex items-center gap-2 rounded-full bg-slate-700 hover:bg-slate-600 border border-emerald-500/30 text-white font-medium transition-all shadow-lg"
>
  📤 Share Wish
</button>

<button 
  onClick={() => navigate('/')}
  style={{ padding: '0.75rem 1rem' }}
  className="flex items-center gap-2 rounded-full bg-slate-800/50 hover:bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 font-medium transition-all backdrop-blur-sm"
>
  ✨ Try Another Name
</button>
</motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Elegant Section Divider */}
        {displayName && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="w-full max-w-lg mx-auto my-12 flex items-center justify-center gap-4 opacity-70"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="text-emerald-300 text-xl animate-pulse">🌙</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </motion.div>
        )}

        {displayName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full max-w-5xl mx-auto px-2 sm:px-6"
          >
            <GreetingWishes />
          </motion.div>
        )}
      </div>

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

      {/* Page Footer */}
      <footer className="w-full text-center py-6 text-emerald-200/50 text-sm z-10 mt-auto">
        ✨ Eid Mubarak • Share the blessings ✨
      </footer>
    </motion.main>
  )
}
