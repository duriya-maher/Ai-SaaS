'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'  

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-xl">
            AI
          </div>
          <span className="text-2xl font-bold font-mono">SAAS</span>
        </Link>

        {/* Desktop Navigation */}
       <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className={`transition-colors ${pathname === '/features' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`}>Features</Link>
          <Link href="/pricing" className={`transition-colors ${pathname === '/pricing' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`}>Pricing</Link>
          <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`}>About</Link>
          <Link href="/blog" className={`transition-colors ${pathname === '/blog' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`}>Blog</Link>
          <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`}>Contact</Link>
          <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 p-6 space-y-4 rounded-2xl">
          <Link href="/features" className={`block transition-colors ${pathname === '/features' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`} onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className={`block transition-colors ${pathname === '/pricing' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`} onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="/about" className={`block transition-colors ${pathname === '/about' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/blog" className={`block transition-colors ${pathname === '/blog' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`} onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className={`block transition-colors ${pathname === '/contact' ? 'text-purple-400 font-semibold' : 'hover:text-purple-400'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
