'use client'

import { motion } from "framer-motion";
import ExpertImage from "@/assets/Expert.png";
import LearnImage from "@/assets/Learn.png";
import CertificateImage from "@/assets/Certificate.png";

const features = [
  {
    title: "Expert Guidance",
    description:
      "Master new skills with expert-led learning. Get tailored guidance from professionals. Elevate your career with trusted expertise.",
    image: ExpertImage,
    imageAlt: "Two professionals collaborating on a computer",
  },
  {
    title: "Learn on Demand",
    description:
      "On-demand learning lets you take control of your education. Whether at home or on the go, access expert-led courses tailored to your pace. Learn what you need, when you need it, and achieve your goals on your terms.",
    image: LearnImage,
    imageAlt: "Students studying together in a group",
  },
  {
    title: "Certificate On Completion",
    description:
      "Earn a certificate on completion to showcase your achievement and skills. Highlight your expertise and boost your credentials with industry-recognized proof of your learning. Your journey to success, certified.",
    image: CertificateImage,
    imageAlt: "Person holding a certificate",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function CoreOfferings() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="relative mb-20"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a237e]">
              Core Offerings
            </h2>
            {/* Decorative dots */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full max-w-[200px] flex justify-between">
              <div className="w-2 h-2 rounded-full bg-[#26c6da]"></div>
              <div className="w-2 h-2 rounded-full bg-[#26c6da]"></div>
            </div>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense gap-20' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`max-w-xl ${
                  index % 2 === 1 ? 'md:col-start-2' : 'md:col-start-1'
                }`}>
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#26c6da] mb-6 inline-block">
                      {feature.title}
                    </h3>
                    {/* Decorative underline */}
                    <div className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-[#26c6da]"></div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mt-6">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`${
                  index % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'
                } flex justify-center items-center`}>
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full max-w-[480px] h-auto object-cover rounded-lg"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute inset-0 border-2 border-[#26c6da] rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#26c6da]/10 rounded-full -z-20"></div>
                    {index % 2 === 0 && (
                      <div className="absolute -left-6 -top-6 w-12 h-12 border-2 border-[#26c6da] rounded-lg transform rotate-45 -z-20"></div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CoreOfferings;

