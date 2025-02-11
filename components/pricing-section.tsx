"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Pricing for Your School</h2>
          <p className="text-xl text-gray-600 mb-8">
            We understand that every school has unique needs. Contact us for a personalized quote tailored to your
            institution.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us for Pricing
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

