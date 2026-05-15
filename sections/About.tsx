import FadeUp from "@/components/FadeUp";
import { GraduationCap, Globe, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <FadeUp>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Students Through
            Innovative Education
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We combine modern learning methodologies, industry-focused
            curriculum, and practical experiences to help students build
            successful careers in today’s fast-changing world.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-blue-600 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-white transition">
              <GraduationCap className="text-blue-600" size={32} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-white transition">
              Expert Faculty
            </h3>

            <p className="mt-4 text-gray-600 group-hover:text-blue-100 transition leading-relaxed">
              Learn from experienced educators and industry professionals
              dedicated to student success.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-purple-600 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:bg-white transition">
              <Globe className="text-purple-600" size={32} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-white transition">
              Global Exposure
            </h3>

            <p className="mt-4 text-gray-600 group-hover:text-purple-100 transition leading-relaxed">
              Access international opportunities, collaborations,
              and innovative learning environments.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-black transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center group-hover:bg-white transition">
              <Briefcase className="text-black" size={32} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-white transition">
              Career Growth
            </h3>

            <p className="mt-4 text-gray-600 group-hover:text-gray-300 transition leading-relaxed">
              Gain practical skills and career guidance to succeed
              in competitive industries.
            </p>

          </div>

        </div>

      </div>
      </FadeUp>

    </section>
  )
}

export default About