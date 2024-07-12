import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="home"
      className="relative z-10 overflow-hidden bg-white pt-[120px] dark:bg-gray-dark md:pt-[120px] xl:pt-[140px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto max-w-[800px] text-center"
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <h1 className="mb-1 text-3xl font-extrabold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Cognitive AI Assistance
              </h1>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                A Workforce without Limits
              </h1>
              <motion.p
                className="mb-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                variants={itemVariants}
                transition={{ delay: 0.4 }}
              >
                In the form of a chatbot, BarokahAI offers an AI assistant with
                fast service and ready to answer all your questions, provides a
                responsive display tailored to your needs.
              </motion.p>
              <motion.div
                className="flex mb-7 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/chat"
                  className="rounded-lg bg-primary px-4 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Get Started
                </Link>
                <Link
                  to="https://github.com/Barokah-AI/FrontEnd"
                  className="inline-block rounded-lg bg-black px-4 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Start on GitHub
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
              >
                <img
                  className="w-[330px] h-auto md:w-[300px] lg:w-[400px]"
                  src="/images/hero/chatbotlogo.png"
                  alt="hero-image"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;
