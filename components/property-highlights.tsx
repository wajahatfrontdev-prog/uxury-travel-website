"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const properties = [
  {
    id: 1,
    title: "Clifftop Villa",
    location: "Santorini",
    features: ["5 Bedrooms", "Private Pool", "Infinity Views"],
    image: "/clifftop-villa-luxury-santorini.jpg",
  },
  {
    id: 2,
    title: "Beachfront Paradise",
    location: "Maldives",
    features: ["3 Bedrooms", "Water Access", "Spa"],
    image: "/beachfront-luxury-maldives-resort.jpg",
  },
  {
    id: 3,
    title: "Mountain Retreat",
    location: "Swiss Alps",
    features: ["6 Bedrooms", "Sauna", "Wine Cellar"],
    image: "/mountain-luxury-villa-swiss-alps.jpg",
  },
]

export default function PropertyHighlights() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <section id="properties" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Premium Selection</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 text-white">Property Highlights</h2>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Glass Card */}
              <motion.div
                className="glass glass-hover p-6 rounded-xl border border-gold/20"
                whileHover={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
              >
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{property.title}</h3>
                <p className="text-gold text-sm font-semibold mb-4">{property.location}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium text-white/70 bg-gold/10 px-3 py-1 rounded-full border border-gold/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-gold-glow py-2 rounded-lg font-semibold text-sm"
                >
                  View Details
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
