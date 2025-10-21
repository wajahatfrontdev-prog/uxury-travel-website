"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Whitewashed cliffs and azure waters",
    image: "/santorini-greece-luxury-villa.jpg",
    price: "$2,500/night",
  },
  {
    id: 2,
    name: "Maldives",
    description: "Overwater bungalows and pristine beaches",
    image: "/maldives-luxury-resort-beach.jpg",
    price: "$3,200/night",
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    description: "Tropical paradise with ancient temples",
    image: "/bali-luxury-villa-tropical.jpg",
    price: "$1,800/night",
  },
  {
    id: 4,
    name: "Amalfi Coast, Italy",
    description: "Dramatic coastline and Mediterranean charm",
    image: "/amalfi-coast-italy-luxury.jpg",
    price: "$2,100/night",
  },
]

export default function FeaturedDestinations() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="destinations" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Curated Experiences</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 text-white">Featured Destinations</h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            Handpicked luxury destinations around the world
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Card Background */}
              <div className="relative h-80 overflow-hidden rounded-lg">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Card Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6 rounded-lg glass-hover"
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-white/70 text-sm mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">{destination.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    →
                  </motion.button>
                </div>
              </motion.div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-lg border border-gold/0 group-hover:border-gold/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
