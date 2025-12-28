import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Layers, TrendingUp, Users, Brain, Sparkles, Database, Lock, Cloud, Workflow } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Features - AI SaaS Platform',
  description: 'Explore powerful AI-driven features that transform your product development workflow.',
}

export default function FeaturesPage() {
  const features = [
    {
      id: 'ai-generation',
      icon: Brain,
      title: 'AI-Powered Generation',
      description: 'Transform a single prompt into complete product designs, specifications, and content.',
      details: [
        'Natural language to design conversion',
        'Automated mockup generation',
        'Smart content creation',
        'Contextual suggestions and improvements',
        'Multi-format export capabilities'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'auto-export',
      icon: Layers,
      title: 'Automated Documentation',
      description: 'Generate complete tech packs, specifications, and documentation with one click.',
      details: [
        'Automatic spec sheet generation',
        'Export to multiple formats (PDF, DOCX, JSON)',
        'Version control and history tracking',
        'Collaborative editing features',
        'Template customization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'analytics',
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep insights into your product performance with year-over-year comparisons.',
      details: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Predictive analytics',
        'Export and scheduling reports',
        'Integration with data sources'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'feedback',
      icon: Users,
      title: 'Smart Feedback Management',
      description: 'AI transforms scattered feedback into organized, actionable insights.',
      details: [
        'Sentiment analysis',
        'Automatic categorization',
        'Priority ranking',
        'Integration with project management',
        'Stakeholder notifications'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'workflow',
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and connect your entire product pipeline.',
      details: [
        'Custom workflow builder',
        'Trigger-based automation',
        'Third-party integrations',
        'Approval workflows',
        'Status tracking and notifications'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'collaboration',
      icon: Sparkles,
      title: 'Real-Time Collaboration',
      description: 'Work together seamlessly with your team in real-time.',
      details: [
        'Live editing and comments',
        'Role-based permissions',
        'Activity tracking',
        'Version history',
        'Team workspaces'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'integrations',
      icon: Cloud,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and services effortlessly.',
      details: [
        'Pre-built connectors for popular tools',
        'REST API access',
        'Webhook support',
        'Custom integration development',
        'Data sync and backups'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance certifications.',
      details: [
        'SOC 2 Type II certified',
        'End-to-end encryption',
        'SSO and 2FA support',
        'Regular security audits',
        'GDPR and CCPA compliant'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'data',
      icon: Database,
      title: 'Intelligent Data Management',
      description: 'Organize, search, and retrieve your product data effortlessly.',
      details: [
        'Advanced search capabilities',
        'Smart tagging and categorization',
        'Bulk operations',
        'Data import/export',
        'Unlimited storage'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Powerful features that
              <br />
              <span className="gradient-text">supercharge your workflow</span>
            </h1>
            <p className="text-xl text-slate-300">
              Everything you need to design, build, and launch products faster than ever before with AI-powered automation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} id={feature.id} className="glass rounded-3xl p-8 card-hover scroll-mt-24">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to experience these features?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your free trial today and see how our platform can transform your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                Start Free Trial
              </Link>
              <Link href="/pricing" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
