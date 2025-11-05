import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-wide mb-3">RoamQuest</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Vintage-inspired travel stories, guides, and tips for the curious explorer.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Social icons */}
            <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.25.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v4h2v12h5V12h3.642L18 8h-4V6.333C14 5.6 14.224 5 15.334 5H18V0h-3c-3.866 0-6 1.79-6 5.091V8Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.011c-.793.352-1.644.588-2.538.694a4.476 4.476 0 0 0 1.962-2.475 8.959 8.959 0 0 1-2.828 1.082A4.466 4.466 0 0 0 11.05 8.17 12.68 12.68 0 0 1 3.15 4.67a4.46 4.46 0 0 0 1.38 5.958 4.426 4.426 0 0 1-2.022-.559v.056a4.473 4.473 0 0 0 3.58 4.384 4.486 4.486 0 0 1-2.015.077 4.471 4.471 0 0 0 4.17 3.1A8.967 8.967 0 0 1 2 19.539a12.645 12.645 0 0 0 6.84 2.004c8.21 0 12.7-6.798 12.7-12.692 0-.194-.004-.389-.013-.582A9.067 9.067 0 0 0 22.46 6.01Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-orange-500">Destinations</a></li>
            <li><a href="#" className="hover:text-orange-500">Photography</a></li>
            <li><a href="#" className="hover:text-orange-500">Guides</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-orange-500">Our Story</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            <li><a href="#" className="hover:text-orange-500">Press</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-semibold text-white text-sm uppercase mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Weekly stories & travel tips — straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded bg-gray-900 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RoamQuest • All rights reserved
      </div>
    </footer>
  );
}
