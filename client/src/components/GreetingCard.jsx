/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

export default function GreetingCard({ userName, onBack }) {
  const shareUrl = window.location.href
  const title = `Eid Mubarak to ${userName}! Check out this beautiful Eid greeting.`
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className="w-full max-w-4xl bg-white/8 border border-amber-200/25 rounded-3xl p-8 sm:p-10 backdrop-blur-lg shadow-2xl shadow-amber-950/40 relative"
    >
      {/* Decorative glow effect */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none rounded-3xl" 
        style={{ background: 'radial-gradient(circle at top right, rgba(255, 200, 87, 0.2) 0%, transparent 70%)' }} 
      />
      <div className="relative z-10 flex items-center justify-center gap-6">
        {/* Left image */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src="https://www.ariananews.af/wp-content/uploads/2021/09/imran-khan.jpg"
          alt="Imran Khan"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-amber-300/50 shadow-lg ml-4"
        />

        {/* Main content */}
        <div className="flex-1 space-y-6 text-center">
          {/* Main greeting heading */}
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-black text-amber-50 leading-tight tracking-tight"
          >
            Eid Mubarak,
            <br />
            <span className="text-amber-300">{userName}</span>! 🌙✨
          </motion.h1>

          {/* Main message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg sm:text-xl text-slate-100 leading-relaxed font-medium px-2"
          >
            May your life be filled with happiness, peace, and blessings. May this Eid bring more love and joy to you and your family.
          </motion.p>

          {/* Special message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-amber-200 font-semibold"
          >
            Eid Mubarak To Imran Khan (Ex-Former Prime Minister of Pakistan)
          </motion.p>

          {/* Sender attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-2 pt-3 border-t border-white/10"
          >
            <span className="text-amber-200/70 text-sm italic tracking-wide font-light">
              — Eid wishes from <b className='text-red-600'>Mamoon Akhter Sandhu</b>
            </span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6"
          >
            {/* Go Back button - Secondary/Outlined */}
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3.5 rounded-xl font-bold text-base transition-all duration-200 border-2 border-emerald-400/60 text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-300 active:scale-95 shadow-md hover:shadow-lg"
            >
              ← Go Back
            </button>

            {/* Share buttons */}
            <div className="flex gap-3 justify-center sm:justify-end">
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 pt-4 border-t border-white/10"
          >
            <p className="text-sm text-emerald-100/70">
              ✨ Celebrate this blessed day with family and loved ones
            </p>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src="https://amu.tv/wp-content/uploads/2025/09/Imran-khan.jpg"
          alt="Imran Khan"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-amber-300/50 shadow-lg mr-4"
        />
      </div>
    </motion.section>
  )
}
