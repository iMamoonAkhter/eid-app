import { motion } from 'framer-motion'
import eid1 from '../assets/images/Eid Al Fitr Eid GIF (1).gif'
import eid2 from '../assets/images/Eid Al Fitr Eid GIF.gif'
import eid3 from '../assets/images/Eid Al Fitr Ramadan GIF by Islamic Relief Switzerland.gif'
import eid4 from '../assets/images/Eid Al Fitr Ramadan GIF by SAP.gif'
import eid5 from '../assets/images/Eid Al Fitr Ramadan GIF by Sonamm.gif'
import eid6 from '../assets/images/Images Wallpaper GIF.gif'

const quotes = [
  {
    text: 'May this Eid fill your heart with joy and your home with laughter',
    image: eid1,
  },
  {
    text: 'Eid Mubarak! Wishing blessings, love, and peace to you and your family',
    image: eid2,
  },
  {
    text: 'Celebrate this Eid with happiness, hope, and endless smiles',
    image: eid3,
  },
  {
    text: 'May your days be bright and your nights peaceful this Eid',
    image: eid4,
  },
  {
    text: 'Eid is a time to share love, kindness, and beautiful memories',
    image: eid5,
  },
  {
    text: 'Sending heartfelt wishes for a joyous and prosperous Eid',
    image: eid6,
  },
]

export default function EidQuotes() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-50 mb-4 tracking-wider">Eid Quotes</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {quotes.map((quote, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col h-full rounded-3xl overflow-hidden bg-white/10 border border-emerald-100/25 shadow-lg shadow-emerald-950/30 backdrop-blur-md"
          >
            <img src={quote.image} alt="Eid" className="h-44 w-full object-cover" loading="lazy" />
            <div className="p-5 flex flex-col flex-1 justify-between">
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">“{quote.text}”</p>
              <span className="mt-4 text-xs text-emerald-200/90">Eid blessings from the heart</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
