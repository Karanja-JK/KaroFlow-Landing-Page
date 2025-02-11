import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import HowItWorks from "../components/how-it-works"
import PricingSection from "../components/pricing-section"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-hero-gradient">
        <Header />
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

