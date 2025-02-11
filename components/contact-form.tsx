"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const schoolTypes = [
  { value: "kindergarten", label: "Kindergarten" },
  { value: "primary", label: "Primary School" },
  { value: "high", label: "High School" },
  { value: "tertiary", label: "Tertiary Institution" },
  { value: "university", label: "College/University" },
  { value: "other", label: "Other" },
]

interface FormValues {
  schoolName: string
  name: string
  role: string
  email: string
  phone: string
  typeOfSchool: string[]
}

interface FormErrors {
  [key: string]: string
}

const useForm = (initialState: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string) => (value: string, checked: boolean) => {
    setValues((prev) => ({
      ...prev,
      [name]: checked ? [...prev[name], value] : prev[name].filter((t: string) => t !== value),
    }))
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!values.schoolName) newErrors.schoolName = "School name is required"
    if (!values.name) newErrors.name = "Your name is required"
    if (!values.role) newErrors.role = "Your role is required"
    if (!values.email) newErrors.email = "Email is required"
    if (!/^\S+@\S+\.\S+$/.test(values.email)) newErrors.email = "Invalid email format"
    if (!values.phone) newErrors.phone = "Phone number is required"
    if (values.typeOfSchool.length === 0) newErrors.typeOfSchool = "Please select at least one school type"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return { values, handleChange, handleSelectChange, handleCheckboxChange, errors, validateForm }
}

export default function ContactForm() {
  const { values, handleChange, handleSelectChange, handleCheckboxChange, errors, validateForm } = useForm({
    schoolName: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    typeOfSchool: [],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        alert("Form submitted successfully!")
        // Reset form
        // You might want to add a reset function to the useForm hook
      } else {
        alert("Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error submitting form. Please try again.")
    }
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
                value={values.schoolName}
                onChange={handleChange}
                required
                className="w-full"
              />
              {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input id="name" name="name" value={values.name} onChange={handleChange} required className="w-full" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <Select onValueChange={handleSelectChange("role")} value={values.role}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school_owner">School Owner</SelectItem>
                  <SelectItem value="principal">Principal</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="finance_manager">Finance Manager</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                required
                className="w-full"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type of School</label>
              <div className="space-y-2">
                {schoolTypes.map((type) => (
                  <div key={type.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`school-type-${type.value}`}
                      name="typeOfSchool"
                      value={type.value}
                      checked={values.typeOfSchool.includes(type.value)}
                      onChange={(e) => handleCheckboxChange("typeOfSchool")(type.value, e.target.checked)}
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor={`school-type-${type.value}`} className="ml-2 block text-sm text-gray-900">
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.typeOfSchool && <p className="text-red-500 text-xs mt-1">{errors.typeOfSchool}</p>}
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

