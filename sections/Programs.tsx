import {
  Code2,
  BrainCircuit,
  BarChart3,
  Palette,
} from "lucide-react";

const programs = [
  {
    title: "Computer Science",
    description:
      "Learn modern software development, AI, cloud computing, and emerging technologies.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Master machine learning, deep learning, and intelligent systems with practical projects.",
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Business Analytics",
    description:
      "Develop data-driven decision making and analytical skills for modern businesses.",
    icon: BarChart3,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Creative Design",
    description:
      "Explore UI/UX, branding, digital media, and creative problem solving.",
    icon: Palette,
    color: "from-green-500 to-emerald-500",
  },
];

const Programs = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold mb-4">
            Programs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore Our
            Industry-Focused Programs
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our programs are designed to combine academic excellence
            with practical industry skills for future-ready careers.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2"
              >

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white`}
                >
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {program.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Button */}
                <button className="mt-8 text-blue-600 font-semibold group-hover:translate-x-2 transition">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Programs;