"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    schoolName: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    currentChallenges: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
    // Reset form
    setFormState({
      schoolName: "",
      name: "",
      role: "",
      email: "",
      phone: "",
      currentChallenges: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRoleChange = (value: string) => {
    setFormState((prev) => ({ ...prev, role: value }))
  }

  return (
    <section id="contact-form" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get Started with Karo Flow</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                School Name
              </label>
              <Input
                id="schoolName"
                name="schoolName"
                value={formState.schoolName}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <Select onValueChange={handleRoleChange} value={formState.role}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principal">School Owner</SelectItem>
                  <SelectItem value="principal">Principal</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="finance_manager">Finance Manager</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Type of School
              </label>
              <Select onValueChange={handleRoleChange} value={formState.role}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your school type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrator">Kindergaten</SelectItem>
                  <SelectItem value="principal">Primary School</SelectItem>
                  <SelectItem value="principal">High School</SelectItem>
                  <SelectItem value="finance_manager">Tertiary Institution</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

