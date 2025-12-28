'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="sales">Sales Question</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="careers">Careers</option>
          <option value="press">Press/Media</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-purple-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </>
        ) : (
          <>
            Send Message
            <Send size={20} />
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="text-center text-green-400 text-sm">
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}
    </form>
  )
}
