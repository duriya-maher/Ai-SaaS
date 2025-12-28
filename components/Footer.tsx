import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-xl">
                AI
              </div>
              <span className="text-2xl font-bold font-mono">SAAS</span>
            </div>
            <p className="text-slate-400 text-sm">
              AI-powered platform for designing, building, and launching products with cutting-edge technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-slate-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="/features#integrations" className="text-slate-400 hover:text-purple-400 transition-colors">Integrations</Link></li>
              <li><Link href="/features#updates" className="text-slate-400 hover:text-purple-400 transition-colors">Updates</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link href="/about#team" className="text-slate-400 hover:text-purple-400 transition-colors">Team</Link></li>
              <li><Link href="/about#careers" className="text-slate-400 hover:text-purple-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={16} />
                <a href="mailto:hello@saas.ai" className="hover:text-purple-400 transition-colors">hello@saas.ai</a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="mt-1" />
                <span>123 AI Street, Tech Valley, CA 94000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 AI SAAS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-slate-500 hover:text-purple-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
