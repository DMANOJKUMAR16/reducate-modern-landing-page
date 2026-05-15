const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-white">
              Reducate
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Empowering students with innovative education,
              practical learning, and future-ready skills.
            </p>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-white transition cursor-pointer">
                About
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Programs
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Testimonials
              </li>
            </ul>

          </div>

          {/* Programs */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Programs
            </h3>

            <ul className="space-y-3">
              <li>Computer Science</li>
              <li>Artificial Intelligence</li>
              <li>Business Analytics</li>
              <li>Creative Design</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-3">
              <li>contact@reducate.ai</li>
              <li>+91 98765 43210</li>
              <li>Hyderabad, India</li>
            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 Reducate. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer