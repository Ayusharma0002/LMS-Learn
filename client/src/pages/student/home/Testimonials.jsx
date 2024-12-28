import { motion } from "framer-motion";
import { User } from "lucide-react";
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Web Developer",
      content:
        "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date.",
    },
    {
      name: "Sarah Lee",
      role: "Data Scientist",
      content:
        "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned.",
    },
    {
      name: "Mike Chen",
      role: "UX Designer",
      content:
        "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job.",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {/* User Image */}
              <div className="flex items-center mb-4">
                <User
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              {/* Review Content */}
              <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
