import React from 'react';

export default function FooterM() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Shiksha Path</h3>
              <p className="text-sm text-gray-400">
                Shiksha Path is dedicated to providing high-quality educational resources to empower learners across the globe. Our platform offers a wide range of courses and tools to help individuals reach their full potential.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200">Home</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200">Courses</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200">Contact Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-200">FAQs</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400 mb-2">Email: info@shikshapath.com</p>
              <p className="text-sm text-gray-400 mb-2">Phone: +1 234 567 890</p>
              <p className="text-sm text-gray-400">Address: 123 Shiksha Path Ave, Learning City, 56789</p>
            </div>
          </div>

          <div className="my-8 border-t border-gray-600"></div>

          {/* Social Media and Newsletter */}
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="text-sm text-gray-400 mb-4">&copy; 2024 Shiksha Path. All rights reserved.</p>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <form className="flex justify-center items-center space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
