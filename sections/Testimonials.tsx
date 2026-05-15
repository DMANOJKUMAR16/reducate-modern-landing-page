import FadeUp from "@/components/FadeUp";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Computer Science Student",
    review:
      "The learning experience completely transformed my technical skills and confidence. The faculty support and practical exposure were exceptional.",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Design Student",
    review:
      "The programs are highly industry-focused and helped me build a strong portfolio with real-world projects and mentorship.",
  },
  {
    name: "Arjun Patel",
    role: "Business Analytics Student",
    review:
      "From workshops to internships, everything was designed to prepare students for successful careers in modern industries.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <FadeUp>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Students Say
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Hear from students who transformed their learning journey
            and career opportunities through our programs.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-gray-700 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="mt-8">

                <h3 className="text-xl font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
      </FadeUp>

    </section>
  );
};

export default Testimonials;