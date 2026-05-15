const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <p className="text-blue-400 font-semibold mb-4">
          Start Your Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Shape Your Future With
          Modern Education
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Join thousands of students learning future-ready skills,
          building successful careers, and transforming their potential.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
            Apply Now
          </button>

          <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Explore Programs
          </button>

        </div>

      </div>

    </section>
  )
}

export default CTA