// import { motion } from "framer-motion";
// import { User } from "lucide-react";
// function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Web Developer",
//       content:
//         "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date.",
//     },
//     {
//       name: "Sarah Lee",
//       role: "Data Scientist",
//       content:
//         "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned.",
//     },
//     {
//       name: "Mike Chen",
//       role: "UX Designer",
//       content:
//         "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 lg:px-8 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
//           What Our Students Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-lg shadow-md"
//             >
//               {/* User Image */}
//               <div className="flex items-center mb-4">
//                 <User
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <div className="font-bold text-gray-800">{testimonial.name}</div>
//                   <div className="text-sm text-gray-500">{testimonial.role}</div>
//                 </div>
//               </div>
//               {/* Review Content */}
//               <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSection;
// import { motion } from "framer-motion";
// import { User } from "lucide-react";

// function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Web Developer",
//       content:
//         "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date.",
//     },
//     {
//       name: "Sarah Lee",
//       role: "Data Scientist",
//       content:
//         "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned.",
//     },
//     {
//       name: "Mike Chen",
//       role: "UX Designer",
//       content:
//         "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 lg:px-8 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
//           What Our Students Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:border-[#1a237e] transition-transform duration-300"
//             >
//               {/* User Image */}
//               <div className="flex items-center mb-4">
//                 <User className="w-12 h-12 rounded-full object-cover mr-4" />
//                 <div>
//                   <div className="font-bold text-gray-800">{testimonial.name}</div>
//                   <div className="text-sm text-gray-500">{testimonial.role}</div>
//                 </div>
//               </div>
//               {/* Review Content */}
//               <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSection;

// import { motion } from "framer-motion";
// import { User } from "lucide-react";

// function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Web Developer",
//       content:
//         "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date.",
//     },
//     {
//       name: "Sarah Lee",
//       role: "Data Scientist",
//       content:
//         "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned.",
//     },
//     {
//       name: "Mike Chen",
//       role: "UX Designer",
//       content:
//         "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job.",
//     },
//     {
//       name: "Alex Johnson",
//       role: "Web Developer",
//       content:
//         "The courses here have been instrumental in advancing my career. The instructors are top-notch and the content is always up-to-date.",
//     },
//     {
//       name: "Sarah Lee",
//       role: "Data Scientist",
//       content:
//         "I've taken multiple courses on data science and machine learning. The hands-on projects really helped me apply what I learned.",
//     },
//     {
//       name: "Mike Chen",
//       role: "UX Designer",
//       content:
//         "The UX design course I took was comprehensive and practical. It gave me the skills I needed to land my dream job.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 lg:px-8 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
//           What Our Students Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-105 hover:border-[#1a237e]  transition-all duration-300"
//             >
//               {/* User Image */}
//               <div className="flex items-center mb-4">
//                 <User className="w-12 h-12 rounded-full object-cover mr-4" />
//                 <div>
//                   <div className="font-bold text-gray-800">{testimonial.name}</div>
//                   <div className="text-sm text-gray-500">{testimonial.role}</div>
//                 </div>
//               </div>
//               {/* Review Content */}
//               <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSection;
import { motion } from "framer-motion";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    {
      name: "Emily Davis",
      role: "Project Manager",
      content:
        "The project management course was eye-opening and incredibly useful. I feel much more confident managing teams and deadlines now.",
    },
    {
      name: "John Smith",
      role: "Software Engineer",
      content:
        "The programming courses here taught me the foundations and advanced concepts that I apply daily in my work.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300, // Slide in from the left or right
      opacity: 1, // Keep opacity at 1 for visibility during animation
    }),
    center: {
      x: 0,
      opacity: 1, // Fully visible in the center
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300, // Slide out to the left or right
      opacity: 1, // Keep opacity at 1 to avoid fading
    }),
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
          What Our Students Say
        </h2>

        <div className="relative flex items-center mt-10 overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a237e]" />
          </button>

          {/* Testimonials */}
          <motion.div
            className="flex gap-8 w-full"
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            key={currentIndex}
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md w-1/3 cursor-pointer hover:shadow-xl hover:scale-105 hover:border-[#1a237e] transition-all duration-300"
              >
                {/* User Image */}
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                {/* Review Content */}
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-[#1a237e]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
