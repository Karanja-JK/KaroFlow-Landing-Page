import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const partners = ["/partner1-logo.png", "/partner2-logo.png", "/partner3-logo.png", "/partner4-logo.png"]

export default function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by Schools Across the Country</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Shield className="h-12 w-12 text-primary mr-4" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
            <p className="text-gray-600">
              Your data is protected with industry-leading encryption and security measures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

