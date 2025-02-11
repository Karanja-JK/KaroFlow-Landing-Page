"use client"

import { motion } from "framer-motion"
import { CreditCard, BarChart, Bell, FileText, FileIcon as FileInvoice, Receipt } from "lucide-react"

const features = [
  {
    icon: <CreditCard className="h-12 w-12 text-primary" />,
    title: "Flexible Payment Options",
    description: "Offer various payment plans including installments, early-bird discounts, and custom schedules.",
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Automated Reconciliation",
    description: "Save hours of manual work with smart payment matching and automatic updates.",
  },
  {
    icon: <Bell className="h-12 w-12 text-primary" />,
    title: "Smart Notifications",
    description: "Keep parents informed with automated reminders and payment confirmations.",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Comprehensive Reports",
    description: "Get real-time insights into your school's financial performance and cash flow.",
  },
  {
    icon: <FileInvoice className="h-12 w-12 text-primary" />,
    title: "Automated Invoicing",
    description: "Generate and send professional invoices automatically, saving time and reducing errors.",
  },
  {
    icon: <Receipt className="h-12 w-12 text-primary" />,
    title: "Digital Receipts",
    description:
      "Issue instant digital receipts for all transactions, improving record-keeping and parent satisfaction.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to manage school payments
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful features designed specifically for educational institutions
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

