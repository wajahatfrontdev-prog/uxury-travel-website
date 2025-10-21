"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Travel Enthusiast",
    content:
      "HolidayNest transformed our vacation into an unforgettable experience. The attention to detail was impeccable.",
    image: "/professional-woman-portrait.png",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Business Executive",
    content: "The luxury properties and seamless booking process made our family getaway absolutely perfect.",
    image: "/professional-man-portrait.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Luxury Travel Blogger",
    content: "I've stayed at countless luxury resorts, but HolidayNest's curation is unmatched. Highly recommended!",
    image: "/professional-woman-smiling-portrait.png",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Client Stories</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 text-white">What Our Guests Say</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass glass-hover p-12 rounded-2xl border border-gold/20 text-center"
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-white/80 mb-8 leading-relaxed italic">"{testimonials[current].content}"</p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full border-2 border-gold/30"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-gold text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-gold w-8" : "bg-gold/30"}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
