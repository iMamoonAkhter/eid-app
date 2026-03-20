/* eslint-disable react/prop-types */
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NameForm({ initialName = '', onGenerate, disabled }) {
  const [name, setName] = useState(initialName)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter your name.')
      return
    }
    setError('')
    onGenerate(trimmed)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="w-full bg-white/10 border border-emerald-100/20 backdrop-blur rounded-3xl shadow-2xl shadow-emerald-950/40 p-8 sm:p-12"
    >
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <label className="block text-base sm:text-lg text-emerald-50 font-semibold tracking-wide mb-3" htmlFor="username">
          Enter your name
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Your Name..."
          disabled={disabled}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl bg-white/90 text-slate-900 px-6 py-4 outline-none border-2 border-emerald-300/60 placeholder:text-slate-400 shadow-lg shadow-emerald-950/20 transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-300/40 text-base sm:text-lg"
          style={{ fontWeight: '500', letterSpacing: '0.3px' }}
        />
        {error && <p className="text-sm text-rose-200 mt-3 font-medium">{error}</p>}
        <button
          type="submit"
          disabled={disabled}
          className="w-full py-4 px-6 rounded-2xl font-bold text-white text-base sm:text-lg disabled:opacity-50 shadow-xl shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/50 active:translate-y-0"
          style={{ backgroundImage: 'linear-gradient(135deg, #34d399 0%, #059669 100%)', letterSpacing: '0.5px' }}
        >
          Generate Wish 🎁
        </button>
      </form>
    </motion.div>
  )
}
