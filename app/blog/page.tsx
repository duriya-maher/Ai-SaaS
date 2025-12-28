import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - AI SaaS Platform',
  description: 'Stay updated with the latest insights, tips, and news about AI-powered product development.',
}

export default function BlogPage() {
  const posts = [
    {
      slug: 'ai-revolution-product-development',
      title: 'The AI Revolution in Product Development',
      excerpt: 'Discover how artificial intelligence is transforming the way teams design, build, and launch products in 2025.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      author: 'Sarah Chen',
      date: '2025-01-15',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      slug: 'boost-team-productivity',
      title: '10 Ways to Boost Your Team\'s Productivity with AI',
      excerpt: 'Learn practical strategies to leverage AI tools and automate repetitive tasks in your workflow.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      category: 'Productivity',
      readTime: '7 min read'
    },
    {
      slug: 'design-thinking-ai-era',
      title: 'Design Thinking in the AI Era',
      excerpt: 'How to maintain human-centered design principles while leveraging AI-powered tools.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop',
      author: 'Emily Watson',
      date: '2025-01-05',
      category: 'Design',
      readTime: '6 min read'
    },
    {
      slug: 'scaling-product-teams',
      title: 'Scaling Product Teams: Lessons from Fast-Growing Startups',
      excerpt: 'Insights from companies that successfully scaled from 5 to 50+ team members.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
      author: 'David Kim',
      date: '2024-12-28',
      category: 'Startup',
      readTime: '8 min read'
    },
    {
      slug: 'customer-feedback-analytics',
      title: 'Turning Customer Feedback into Actionable Insights',
      excerpt: 'A complete guide to collecting, analyzing, and acting on customer feedback effectively.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      author: 'Lisa Thompson',
      date: '2024-12-20',
      category: 'Customer Success',
      readTime: '6 min read'
    },
    {
      slug: 'future-of-work',
      title: 'The Future of Work: AI Collaboration',
      excerpt: 'How AI assistants are becoming essential team members in modern workplaces.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
      author: 'James Park',
      date: '2024-12-15',
      category: 'Future of Work',
      readTime: '5 min read'
    }
  ]

  const categories = ['All', 'AI & Technology', 'Productivity', 'Design', 'Startup', 'Customer Success', 'Future of Work']

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Insights & Updates
              <br />
              <span className="gradient-text">from our team</span>
            </h1>
            <p className="text-xl text-slate-300">
              Learn about AI, product development, and building better teams.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`glass px-6 py-2 rounded-full hover:bg-white/10 transition-all ${
                  category === 'All' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <Link href={`/blog/${posts[0].slug}`} className="glass rounded-3xl overflow-hidden card-hover group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:py-12">
                <div className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold mb-4">
                  Featured
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-slate-300 mb-6 text-lg">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span>{posts[0].readTime}</span>
                </div>
                <div className="mt-6 flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} className="glass rounded-3xl overflow-hidden card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full glass border border-white/10 focus:border-purple-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
