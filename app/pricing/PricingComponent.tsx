'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingComponent() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 37,
      annualPrice: 370,
      description: "Perfect for small businesses starting with AI automation.",
      features: [
        "Basic workflow automation",
        "AI-powered personal assistant",
        "Real-Time Insights",
        "Standard analytics & reporting",
        "Email & chat support",
        "5 team members",
        "10GB storage",
        "100 AI generations/month"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      monthlyPrice: 75,
      annualPrice: 750,
      description: "Perfect for medium businesses scaling with AI automation.",
      features: [
        "Advanced workflow automation",
        "AI-driven sales & marketing tools",
        "Enhanced data analytics & insights",
        "Priority customer support",
        "Advanced integrations",
        "Unlimited team members",
        "100GB storage",
        "1000 AI generations/month",
        "Custom branding",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      annualPrice: null,
      description: "Perfect for large businesses with custom needs.",
      features: [
        "Fully customizable AI automation",
        "Dedicated AI business consultant",
        "Enterprise-grade compliance",
        "24/7 VIP support",
        "Unlimited AI integrations",
        "Unlimited everything",
        "Custom storage limits",
        "Unlimited AI generations",
        "White-label options",
        "SLA guarantees",
        "Dedicated infrastructure",
        "Custom contracts"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                !isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-full font-semibold transition-all relative ${
                isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-2 py-1 rounded-full text-white font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass rounded-3xl p-8 card-hover relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="text-5xl font-bold mb-4">
                {plan.monthlyPrice ? (
                  <>
                    ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                    <span className="text-lg text-slate-400">/month</span>
                  </>
                ) : (
                  'Custom'
                )}
              </div>
              
              {isAnnual && plan.annualPrice && (
                <p className="text-sm text-green-400 mb-4">
                  ${plan.annualPrice}/year - Save ${(plan.monthlyPrice * 12) - plan.annualPrice}
                </p>
              )}
              
              <p className="text-slate-400 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.monthlyPrice ? '/contact' : '/contact?plan=enterprise'}
                className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">All plans include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'SOC 2 Type II Security',
              '99.9% Uptime SLA',
              'Daily Backups',
              'SSL Encryption',
              'GDPR Compliant',
              'Regular Updates'
            ].map((feature, idx) => (
              <div key={idx} className="glass rounded-xl p-4 flex items-center gap-3">
                <Check className="text-purple-400" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
