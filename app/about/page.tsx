import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Users, Zap, Heart } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - AI SaaS Platform',
  description: 'Learn about our mission to transform product development with AI-powered tools.',
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at TechCorp with 15 years of experience in AI and product development.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher and engineer, previously led machine learning teams at major tech companies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      bio: "Award-winning designer with a passion for creating intuitive, beautiful user experiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer who loves building scalable systems that solve real problems.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring every customer achieves their goals with our platform.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    },
    {
      name: "James Park",
      role: "Head of Marketing",
      bio: "Growth marketer with expertise in SaaS and a track record of scaling businesses.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to democratize AI-powered product development for everyone."
    },
    {
      icon: Users,
      title: "Customer-First",
      description: "Every decision we make is guided by what's best for our customers and their success."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to stay ahead."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We build with empathy, understanding the challenges our users face every day."
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
              Building the future of
              <br />
              <span className="gradient-text">product development</span>
            </h1>
            <p className="text-xl text-slate-300">
              We believe AI should empower everyone to bring their ideas to life, faster and better than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Founded in 2021, AI SaaS was born from a simple observation: product development was too slow, too complex, and too expensive for most teams.
                </p>
                <p>
                  Our founders, Sarah and Michael, experienced this firsthand while building products at major tech companies. They saw talented teams struggling with disconnected tools, manual processes, and endless back-and-forth.
                </p>
                <p>
                  They envisioned a world where AI could handle the repetitive work, allowing teams to focus on creativity and strategy. That vision became AI SaaS.
                </p>
                <p>
                  Today, we're proud to serve thousands of teams worldwide, helping them ship products faster and with more confidence than ever before.
                </p>
              </div>
            </div>
            <div className="glass rounded-3xl p-4">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="glass rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            We're a diverse team of engineers, designers, and product people passionate about making AI accessible to everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="glass rounded-3xl p-6 card-hover text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-slate-300 mb-8">
              We're always looking for talented people who share our passion for building great products.
            </p>
            <Link href="/contact?subject=careers" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
