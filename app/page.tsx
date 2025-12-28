import Image from 'next/image'
import Link from 'next/link'
import { Star, Zap, Layers, TrendingUp, Users, Check, ArrowRight, Shield } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    {
      title: "One prompt, full product",
      description: "Turn ideas into designs, specs, and content instantly with AI-powered automation.",
      icon: Zap,
      href: "/features#ai-generation"
    },
    {
      title: "Auto tech packs and specs",
      description: "Export ready-to-use files with one click. Complete documentation automatically generated.",
      icon: Layers,
      href: "/features#auto-export"
    },
    {
      title: "Compare data year over year",
      description: "Make data-driven decisions with powerful analytics and insights dashboard.",
      icon: TrendingUp,
      href: "/features#analytics"
    },
    {
      title: "Track and review responses",
      description: "Turn messy feedback into clear, actionable insights with AI-powered analysis.",
      icon: Users,
      href: "/features#feedback"
    }
  ]

  const testimonials = [
    {
      quote: "This platform felt like having a full product team in my laptop. Incredible productivity boost!",
      author: "Sana R",
      role: "Head of Innovation",
      company: "TechCorp"
    },
    {
      quote: "From idea to pitch deck in one afternoon. This tool saved me weeks of work!",
      author: "Kevin T",
      role: "AI Enthusiast",
      company: "StartupHub"
    },
    {
      quote: "It just gets it. Design, copy, dev—all handled like magic. Best investment we made.",
      author: "Natalie S",
      role: "Product Designer",
      company: "DesignCo"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="mesh-gradient absolute inset-0 opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold mb-4">
              <span className="text-green-400 mr-2">●</span> AI-Powered Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI that builds your product,
              <br />
              <span className="gradient-text">front to back</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              All-in-one platform for designing, building, and launching products with the power of artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all glow">
                Start Free Trial
              </Link>
              <Link href="/features" className="glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2">
                Explore Features <ArrowRight size={20} />
              </Link>
            </div>

            {/* Awards */}
            <div className="pt-12 flex flex-wrap justify-center gap-6">
              {[2025, 2024, 2023, 2022].map((year, idx) => (
                <div key={year} className="glass p-6 rounded-2xl" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <Star className="mx-auto mb-2 text-yellow-400" size={32} />
                  <div className="text-2xl font-bold">{year}</div>
                  <div className="text-sm text-slate-400">Award</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-4 glow">
              <div className="relative w-full h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop"
                  alt="Product Dashboard"
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-400 uppercase tracking-wider font-mono mb-4">Trusted By Leaders</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by leaders from
              <br />
              various industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-8 card-hover">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                50 hours
              </div>
              <p className="text-xl text-slate-300">saved per project</p>
            </div>
            <div className="glass rounded-3xl p-8 card-hover">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                40%
              </div>
              <p className="text-xl text-slate-300">reduced revision rounds</p>
            </div>
            <div className="glass rounded-3xl p-8 card-hover">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                10x
              </div>
              <p className="text-xl text-slate-300">faster prototyping turnaround</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 uppercase tracking-wider font-mono mb-4">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything you need to go
              <br />
              from idea to launch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <Link key={idx} href={feature.href} className="glass rounded-3xl overflow-hidden card-hover group">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="text-purple-400 group-hover:scale-125 transition-transform duration-500" size={64} />
                  </div>
                </div>
                <div className="p-8">
                  <feature.icon className="mb-4 text-purple-400" size={32} />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg">
              View All Features <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-wider font-mono mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Turns out, people like
              <br />
              getting things done
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass rounded-3xl p-8 card-hover">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold mb-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
                <p className="text-lg italic text-slate-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your
              <br />
              <span className="gradient-text">product development?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already building faster, smarter, and more efficiently with AI-powered tools.
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
