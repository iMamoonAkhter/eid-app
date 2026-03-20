import { motion } from 'framer-motion'

const wishes = [
  {
    icon: '🤲',
    text: 'May Allah accept your prayers and bless you with happiness.',
  },
  {
    icon: '🏡',
    text: 'Eid Mubarak! May your home be filled with joy and laughter.',
  },
  {
    icon: '✨',
    text: 'Wishing you success, peace, and prosperity this Eid.',
  },
  {
    icon: '🌟',
    text: 'May this Eid bring new opportunities and endless blessings.',
  },
  {
    icon: '💚',
    text: 'Celebrate this Eid with love, kindness, and gratitude.',
  },
]

export default function GreetingWishes() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xl sm:text-2xl font-bold text-emerald-100 mb-6 tracking-wide text-center"
      >
        More Blessings for You
      </motion.h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {wishes.map((wish, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white/8 border border-emerald-100/20 rounded-2xl p-5 backdrop-blur-sm shadow-lg shadow-emerald-950/20"
          >
            <div className="text-3xl mb-3">{wish.icon}</div>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">{wish.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
