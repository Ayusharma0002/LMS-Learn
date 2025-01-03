
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo1 from "@/assets/logo1.png";
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 h-12 w-2/3 ">
                <img src={Logo1} alt="" />
            </h3>
            <p className="text-gray-400 mb-4">Empowering careers through expert-led online learning and industry-recognized certifications.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#26c6da]" />
                <a href="mailto:info@learnhub.com" className="text-gray-400 hover:text-white transition-colors">info@learnhub.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#26c6da]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-[#26c6da]" />
                <span className="text-gray-400">123 Learning Street, Education City, 12345, Country</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#26c6da]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#26c6da] text-white px-4 py-2 rounded hover:bg-[#2196f3] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

