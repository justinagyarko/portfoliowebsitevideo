import React from 'react';
import { Play, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-gray-900 fill-current" />
              </div>
              <span className="font-bold text-xl">VFX Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating stunning visual effects and motion graphics for brands, films, and digital content. 
              Bringing impossible visions to life through cutting-edge technology and creative innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-bold">YT</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-bold">LI</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-bold">TW</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Visual Effects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Video Production</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Post-Production</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Color Grading</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">hello@vfxportfolio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 VFX Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}