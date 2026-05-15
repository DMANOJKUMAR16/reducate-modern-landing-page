const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="relative z-10">

          <p className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            Future-Ready Education Platform
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Build Your
            <span className="text-blue-600"> Future </span>
            With Modern Learning
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
            Discover industry-focused programs, expert mentors, and
            practical learning experiences designed to prepare students
            for tomorrow’s opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 hover:scale-105 transition">                Explore Programs
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition">              Learn More
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">15K+</h2>
              <p className="text-gray-600 mt-2">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">120+</h2>
              <p className="text-gray-600 mt-2">Programs</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">95%</h2>
              <p className="text-gray-600 mt-2">Placements</p>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div className="relative">

          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl h-[450px] flex items-center justify-center">

              <div className="text-center text-white px-6">

                <h2 className="text-4xl font-bold mb-4">
                  Learn Without Limits
                </h2>

                <p className="text-base md:text-lg text-blue-100">
                  Interactive learning experiences designed for modern students.
                </p>

              </div>

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-5 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
              <p className="text-gray-600 text-sm">Student Rating</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-5 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600 text-sm">Expert Mentors</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero