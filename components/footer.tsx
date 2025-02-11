"use client"

import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KaroFlow</h3>
            <p className="text-sm text-gray-400">Streamlining school payments for a brighter future.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {/* <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </a>
              </li> */}
              <li>
                <a
                  href="#contact-form"
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" /> hello@karoflow.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" /> +254 718956561
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 KaroFlow. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

