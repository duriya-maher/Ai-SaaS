import { Metadata } from 'next'
import PricingComponent from './PricingComponent'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing - AI SaaS Platform',
  description: 'Choose the perfect plan for your team. Flexible pricing that scales with your needs.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Simple, transparent
              <br />
              <span className="gradient-text">pricing for everyone</span>
            </h1>
            <p className="text-xl text-slate-300">
              Choose a plan that works for you. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <PricingComponent />

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I change my plan later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
              },
              {
                q: "What happens when I cancel?",
                a: "You can continue using the service until the end of your billing period. Your data will be available for export for 30 days after cancellation."
              },
              {
                q: "Do you offer discounts for nonprofits?",
                a: "Yes! We offer special pricing for nonprofits and educational institutions. Contact our sales team for details."
              },
              {
                q: "What's included in customer support?",
                a: "All plans include email support. Professional and Enterprise plans get priority support with faster response times. Enterprise also includes phone and dedicated support."
              }
            ].map((faq, idx) => (
              <details key={idx} className="glass rounded-2xl p-6 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
