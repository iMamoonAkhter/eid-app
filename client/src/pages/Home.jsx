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
      className="relative min-h-screen w-full px-4 py-10 sm:py-14 flex items-center justify-center overflow-hidden"
    >
      <FloatingSideDecor />
      <div className="star-dot" style={{ top: '10%', left: '18%', width: '8px', height: '8px' }} />
      <div className="star-dot" style={{ top: '20%', right: '20%', width: '5px', height: '5px' }} />
      <div className="moon-emoji" style={{ top: '12%', right: '12%' }}>🌙</div>
      <div className="relative mx-auto max-w-5xl w-full text-center z-10 backdrop-blur-xl bg-slate-800/30 border border-white/15 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-emerald-950/35">
        <div className="pb-4 mb-12 border-b border-emerald-100/20">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="text-4xl sm:text-6xl font-black text-emerald-100 tracking-tight"
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

        <div className="mb-12">
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

        <div className="mt-12 pt-6 border-t border-emerald-100/10">
          <EidQuotes />
        </div>
      </div>
    </motion.main>
  )
}
