"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dates: "",
    message: "",
  })

  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", destination: "", dates: "", message: "" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Get Started</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 text-white">Plan Your Escape</h2>
          <p className="text-white/60 mt-4 text-lg">Let us help you find your perfect luxury destination</p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="glass glass-hover p-8 md:p-12 rounded-2xl border border-gold/20 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-semibold text-white/70 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-semibold text-white/70 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all duration-300"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Destination */}
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-semibold text-white/70 mb-2">Preferred Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all duration-300"
              >
                <option value="">Select a destination</option>
                <option value="santorini">Santorini, Greece</option>
                <option value="maldives">Maldives</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="amalfi">Amalfi Coast, Italy</option>
              </select>
            </motion.div>

            {/* Dates */}
            <motion.div variants={itemVariants} className="relative">
              <label className="block text-sm font-semibold text-white/70 mb-2">Travel Dates</label>
              <input
                type="text"
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all duration-300"
                placeholder="MM/DD/YYYY - MM/DD/YYYY"
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-sm font-semibold text-white/70 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-all duration-300 resize-none"
              placeholder="Tell us about your dream vacation..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-gold-glow py-3 rounded-lg font-semibold text-lg"
            >
              Send Inquiry
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
