import { Metadata } from 'next'
import ContactForm from './ContactForm'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - AI SaaS Platform',
  description: 'Get in touch with our team. We\'re here to help with any questions about our platform.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Let's start a
              <br />
              <span className="gradient-text">conversation</span>
            </h1>
            <p className="text-xl text-slate-300">
              Whether you have a question, feedback, or just want to say hello, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-slate-300 mb-8">
                  Our team is available Monday through Friday, 9am-6pm PST. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-slate-400 text-sm mb-3">For general inquiries and support</p>
                  <a href="mailto:hello@saas.ai" className="text-purple-400 hover:text-purple-300 transition-colors">
                    hello@saas.ai
                  </a>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-slate-400 text-sm mb-3">Monday to Friday, 9am-6pm PST</p>
                  <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-slate-400 text-sm mb-3">Get instant help from our team</p>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    Start Chat →
                  </button>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-4 flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-400 text-sm">
                    123 AI Street<br />
                    Tech Valley, CA 94000<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Something Specific?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/pricing" className="glass rounded-2xl p-6 card-hover">
              <h3 className="font-bold mb-2">Pricing Questions</h3>
              <p className="text-slate-400 text-sm">View our pricing plans and compare features</p>
            </a>
            <a href="/features" className="glass rounded-2xl p-6 card-hover">
              <h3 className="font-bold mb-2">Product Demo</h3>
              <p className="text-slate-400 text-sm">See our platform in action</p>
            </a>
            <a href="/about" className="glass rounded-2xl p-6 card-hover">
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="text-slate-400 text-sm">Learn more about our team and mission</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
