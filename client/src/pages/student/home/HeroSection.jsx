// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import HeroImage from '@/assets/hero-section.png'
// export default function HeroSection() {
//     return (
//         <div className="container mx-auto md:px-10 px-5  py-2 lg:py-8">
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
//                 {/* Left Content */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="lg:w-1/2 max-w-xl"
//                 >
//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-tight">
//                         Come along as {' '}
//                         <span className="block">we begin our</span>{' '}
//                         <span className="text-[#26c6da]">Learning Journey</span>
//                     </h1>
//                     <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//                         Shape your career with expert-led courses, industry-recognized certifications.
//                     </p>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.6 }}
//                         className="mt-8"
//                     >
//                         <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
//                             Explore Courses
//                         </Button>
//                     </motion.div>
//                 </motion.div>

//                 {/* Right Content */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="lg:w-1/2 relative"
//                 >
//                     <div className="relative">

//                         <img
//                             src={HeroImage}
//                             alt="Student learning online"
//                             className="relative z-10 w-full h-auto md:h-[30rem] max-w-lg mx-auto"
//                         />
//                     </div>


//                 </motion.div>
//             </div>
//         </div>
//     )
// }





// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import HeroImage from "@/assets/hero-section.png";
// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [boxes, setBoxes] = useState([]);

//   // Function to generate random box positions
//   const generateBoxes = () => {
//     const numberOfBoxes = 20; // Adjust this number as needed
//     const generatedBoxes = [];
//     for (let i = 0; i < numberOfBoxes; i++) {
//       generatedBoxes.push({
//         id: i,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//       });
//     }
//     setBoxes(generatedBoxes);
//   };

//   // Function to generate random movement for each box
//   const randomMovement = () => {
//     setBoxes((prevBoxes) =>
//       prevBoxes.map((box) => ({
//         ...box,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//       }))
//     );
//   };

//   // Trigger random movement continuously
//   useEffect(() => {
//     generateBoxes();
//     const interval = setInterval(() => {
//       randomMovement();
//     }, 3000); // Change the position every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, []);

//   return (
//     <div className="container mx-auto md:px-10 px-5 py-2 lg:py-8 relative">
//       {/* Random text boxes in the background */}
//       <div className="absolute z-0 top-0 left-0 w-full h-full">
//         {boxes.map((box) => (
//           <motion.div
//             key={box.id}
//             style={{
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`, // Adjust the left position by half the width of the box (example: 2rem for a box width of 4rem)
//             }}
//             className="absolute text-xl font-bold text-gray-50 bg-opacity-50 bg-gray-300 p-4 rounded-lg pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`,
//             }}
//             transition={{
//               opacity: { duration: 0.5 },
//               top: {
//                 type: "spring",
//                 stiffness: 100, // Lower stiffness for smoother transition
//                 damping: 25, // Lower damping for smoother deceleration
//                 duration: 3, // Slow down the movement duration
//               },
//               left: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 duration: 3, // Slow down the movement duration
//               },
//             }}
//           >
//             <span>Moving Box</span>
//           </motion.div>
//         ))}

//       </div>

//       {/* Main content section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-2 z-10 relative">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.1 }}
//           className="lg:w-1/2 max-w-xl"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-tight">
//             Come along as {" "}
//             <span className="block">we begin our</span>{" "}
//             <span className="text-[#26c6da]">Learning Journey</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//             Shape your career with expert-led courses, industry-recognized certifications.
//           </p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0, duration: 0.1 }}
//             className="mt-8"
//           >
//             <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
//               Explore Courses
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="lg:w-1/2 relative"
//         >
//           <div className="relative">
//             <img
//               src={HeroImage}
//               alt="Student learning online"
//               className="relative z-10 w-full h-auto md:h-[30rem] max-w-lg mx-auto"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import HeroImage from "@/assets/hero-section.png";
// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [boxes, setBoxes] = useState([]);

//   // Function to generate random box positions within the container width
//   const generateBoxes = () => {
//     const numberOfBoxes = 25; // Adjust this number as needed
//     const generatedBoxes = [];
//     for (let i = 0; i < numberOfBoxes; i++) {
//       generatedBoxes.push({
//         id: i,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 90}%`, // Limit left position to 90% to avoid going beyond the container
//       });
//     }
//     setBoxes(generatedBoxes);
//   };

//   // Function to generate random movement for each box
//   const randomMovement = () => {
//     setBoxes((prevBoxes) =>
//       prevBoxes.map((box) => ({
//         ...box,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 90}%`, // Keep it constrained to 90% max
//       }))
//     );
//   };

//   // Trigger random movement continuously
//   useEffect(() => {
//     generateBoxes();
//     const interval = setInterval(() => {
//       randomMovement();
//     }, 3000); // Change the position every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, []);

//   return (
//     <div className="container mx-auto md:px-10 px-5 py-2 lg:py-8 relative">
//       {/* Random text boxes in the background */}
//       <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden"> {/* Added overflow-hidden to prevent scroll */}
//         {boxes.map((box) => (
//           <motion.div
//             key={box.id}
//             style={{
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`, // Adjust left position by half the width of the box
//             }}
//             className="absolute text-xl font-bold text-gray-50 bg-opacity-50 bg-gray-300 p-4 rounded-lg pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`,
//             }}
//             transition={{
//               opacity: { duration: 0.5 },
//               top: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 duration: 3,
//               },
//               left: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 duration: 3,
//               },
//             }}
//           >
//             <span>Moving Box</span>
//           </motion.div>
//         ))}
//       </div>

//       {/* Main content section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-2 z-10 relative">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.1 }}
//           className="lg:w-1/2 max-w-xl"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-tight">
//             Come along as {" "}
//             <span className="block">we begin our</span>{" "}
//             <span className="text-[#26c6da]">Learning Journey</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//             Shape your career with expert-led courses, industry-recognized certifications.
//           </p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0, duration: 0.1 }}
//             className="mt-8"
//           >
//             <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
//               Explore Courses
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="lg:w-1/2 relative"
//         >
//           <div className="relative">
//             <img
//               src={HeroImage}
//               alt="Student learning online"
//               className="relative z-10 w-full h-auto md:h-[30rem] max-w-lg mx-auto"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import HeroImage from "@/assets/hero-section.png";
// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [boxes, setBoxes] = useState([]);
//   const [hover, setHover] = useState(false); // State to track hover

//   // Function to generate random box positions within the container width
//   const generateBoxes = () => {
//     const numberOfBoxes = 25; // Adjust this number as needed
//     const generatedBoxes = [];
//     for (let i = 0; i < numberOfBoxes; i++) {
//       generatedBoxes.push({
//         id: i,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 90}%`, // Limit left position to 90% to avoid going beyond the container
//       });
//     }
//     setBoxes(generatedBoxes);
//   };

//   // Function to generate random movement for each box
//   const randomMovement = () => {
//     setBoxes((prevBoxes) =>
//       prevBoxes.map((box) => ({
//         ...box,
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 90}%`, // Keep it constrained to 90% max
//       }))
//     );
//   };

//   // Trigger random movement when hovered
//   useEffect(() => {
//     if (!hover) return; // Only run if hovered
//     const interval = setInterval(() => {
//       randomMovement();
//     }, 3000); // Change the position every 3 seconds
//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, [hover]);

//   useEffect(() => {
//     generateBoxes(); // Generate boxes on mount
//   }, []);

//   return (
//     <div
//       className="container mx-auto md:px-10 px-5 py-2 lg:py-8 relative"
//       onMouseEnter={() => setHover(true)} // Set hover true on mouse enter
//       onMouseLeave={() => setHover(false)} // Set hover false on mouse leave
//     >
//       {/* Random text boxes in the background */}
//       <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden"> {/* Added overflow-hidden to prevent scroll */}
//         {boxes.map((box) => (
//           <motion.div
//             key={box.id}
//             style={{
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`, // Adjust left position by half the width of the box
//             }}
//             className="absolute text-xl font-bold text-gray-50 bg-opacity-50 bg-gray-300 p-4 rounded-lg pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: 1,
//               top: box.top,
//               left: `calc(${box.left} - 2rem)`,
//             }}
//             transition={{
//               opacity: { duration: 0.5 },
//               top: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 duration: 3,
//               },
//               left: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 duration: 3,
//               },
//             }}
//           >
//             <span>Moving Box</span>
//           </motion.div>
//         ))}
//       </div>

//       {/* Main content section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-2 z-10 relative">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.1 }}
//           className="lg:w-1/2 max-w-xl"
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-tight">
//             Come along as {" "}
//             <span className="block">we begin our</span>{" "}
//             <span className="text-[#26c6da]">Learning Journey</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//             Shape your career with expert-led courses, industry-recognized certifications.
//           </p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0, duration: 0.1 }}
//             className="mt-8"
//           >
//             <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
//               Explore Courses
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="lg:w-1/2 relative"
//         >
//           <div className="relative">
//             <img
//               src={HeroImage}
//               alt="Student learning online"
//               className="relative z-10 w-full h-auto md:h-[30rem] max-w-lg mx-auto"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero-section.png";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [boxes, setBoxes] = useState([]);
  const [hover, setHover] = useState(false); // State to track hover

  // Function to generate random box positions within the container width
  const generateBoxes = () => {
    const numberOfBoxes = 25; // Adjust this number as needed
    const generatedBoxes = [];
    for (let i = 0; i < numberOfBoxes; i++) {
      generatedBoxes.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 90}%`, // Limit left position to 90% to avoid going beyond the container
      });
    }
    setBoxes(generatedBoxes);
  };

  // Function to generate random movement for each box
  const randomMovement = () => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => ({
        ...box,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 90}%`, // Keep it constrained to 90% max
      }))
    );
  };

  // Trigger random movement when hovered
  useEffect(() => {
    if (!hover) return; // Only run if hovered
    const interval = setInterval(() => {
      randomMovement();
    }, 1600); // Change the position every 1.5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [hover]);

  useEffect(() => {
    generateBoxes(); // Generate boxes on mount
  }, []);

  return (
    <div
      className="container mx-auto md:px-10 px-5 py-2 lg:py-8 relative"
      onMouseEnter={() => setHover(true)} // Set hover true on mouse enter
      onMouseLeave={() => setHover(false)} // Set hover false on mouse leave
    >
      {/* Random text boxes in the background */}
      <div className="absolute z-0 top-0 left-0 w-full h-full overflow-hidden">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            style={{
              top: box.top,
              left: box.left,
            }}
            className="absolute text-xl font-bold text-gray-50 bg-opacity-50 bg-gray-300 p-4 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: box.top,
              left: box.left,
            }}
            transition={{
              opacity: { duration: 0.5 },
              top: { duration: 1.5 },
              left: { duration: 1.5 },
            }}
          >
            <span>Moving Box</span>
          </motion.div>
        ))}
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 z-10 relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="lg:w-1/2 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a237e] leading-tight">
            Come along as {" "}
            <span className="block">we begin our</span>{" "}
            <span className="text-[#26c6da]">Learning Journey</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Shape your career with expert-led courses, industry-recognized certifications.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.1 }}
            className="mt-8"
          >
            <Button variant="outline" className="text-[#26c6da] border-[#26c6da] hover:bg-[#2e9ba9] hover:text-white">
              Explore Courses
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative">
            <img
              src={HeroImage}
              alt="Student learning online"
              className="relative z-10 w-full h-auto md:h-[30rem] max-w-lg mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
