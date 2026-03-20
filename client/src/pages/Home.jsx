/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import EidQuotes from '../components/EidQuotes'
import NameForm from '../components/NameForm'
import FloatingSideDecor from '../components/FloatingSideDecor'
import { recordVisitor } from '../api/visitorAPI'

export default function Home({ name, setName }) {
  const navigate = useNavigate()

  const handleGenerate = (enteredName) => {
    setName(enteredName)
    const encoded = encodeURIComponent(enteredName)
    
    // Fire-and-forget API call - don't wait for response
    recordVisitor(enteredName)
    
    // Navigate immediately
    navigate(`/name=${encoded}`)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative min-h-screen w-full px-4 py-6 sm:py-10 flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-slate-900 via-emerald-950/20 to-slate-900"
    >
      <FloatingSideDecor />
      
      {/* Animated Floating Background Elements */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 right-[10%] text-4xl sm:text-5xl opacity-40 select-none">🏮</motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 left-[10%] text-5xl sm:text-6xl opacity-20 select-none">🕌</motion.div>
      
      <div className="star-dot" style={{ top: '10%', left: '18%', width: '8px', height: '8px' }} />
      <div className="star-dot" style={{ top: '20%', right: '20%', width: '5px', height: '5px' }} />
      <div className="moon-emoji" style={{ top: '12%', right: '12%' }}>🌙</div>
      
      <div className="relative flex-1 flex flex-col justify-center my-8 mx-auto max-w-5xl w-full text-center z-10 backdrop-blur-xl bg-slate-800/40 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-emerald-950/40">
        <div className="pb-4 mb-12 border-b border-emerald-100/20">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4 text-5xl sm:text-6xl select-none">
            ✨
          </motion.div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-emerald-100 tracking-tight drop-shadow-lg"
          >
            Eid Mubarak 🌙
          </motion.h1>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 text-lg sm:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed"
          >
            Send your loved ones a beautiful Eid wish
          </motion.p>
        </div>

        <div className="mb-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 text-sm sm:text-base text-emerald-300/80 font-medium tracking-wide uppercase letter-spacing-2">
            ✨ Spread smiles this Eid ✨
          </motion.p>
          <AnimatePresence>
            <motion.div
              key="name-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <NameForm initialName={name} onGenerate={handleGenerate} disabled={false} />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 text-sm shadow-lg shadow-emerald-900/20">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>
            Join hundreds of people sending Eid wishes!
          </div>
        </motion.div>

        <div className="mt-12 pt-8 sm:pt-12 border-t border-emerald-100/10 px-2 sm:px-6">
          <EidQuotes />
        </div>
      </div>
      
      {/* Page Footer */}
      <footer className="w-full text-center py-6 text-emerald-200/50 text-sm z-10">
        Made with ❤️ for Eid • Spread the joy and blessings
      </footer>
    </motion.main>
  )
}
