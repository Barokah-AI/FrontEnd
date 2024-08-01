import SectionTitle from "./SectionTittle";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Define the About component
const About = () => {
  const List = ({ text }) => {
    return (
      <p className="mb-5 flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
        {text}
      </p>
    );
  };

  // Define prop types for the List component
  List.propTypes = {
    text: PropTypes.string.isRequired,
  };

  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

   
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about">
      <div className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="py-16 md:py-20 lg:py-28">
            <div className="-mx-4 flex flex-wrap items-center text-justify">
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={textVariants}
              >
                {/* Replace the text with the following snippet */}
                <SectionTitle
                  title="Barokah-AI"
                  paragraph="Barokah-AI is your digital companion, ready to answer all your questions swiftly and accurately. Powered by artificial intelligence, Barokah-AI delivers the information you seek. With its advanced features and intuitive interface, Barokah-AI offers secure and dependable support. Let's discover new knowledge and enjoy seamless interactions with Barokah-AI!"
                  mb="44px"
                />

                {/* Replace the text with the following snippet */}
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Language Understanding" />
                      <List text="Intelligent Systems" />
                      <List text="Multilingual Support" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Customization" />
                      <List text="Seamless Integration" />
                      <List text="Safe and Secure" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Replace the text with the following snippet  */}
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={imageVariants}
              >
                <div className="relative mx-auto aspect-w-25 aspect-h-24 max-w-[500px] lg:mr-0">
                  <img
                    src="/images/about/pic-about.svg"
                    alt="about-image"
                    className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Replace the text with the following snippet */}
      <div className="py-16 md:py-20 lg:py-28 relative z-10 dark:bg-bg-color-dark bg-gray-light">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={imageVariants}
            >
              <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
                <img
                  src="https://github.com/Barokah-AI/FrontEnd/assets/104063079/cf74a9a2-5084-4310-9817-b201af54cec8"
                  alt="about image"
                  className="drop-shadow-three dark:drop-shadow-none"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full px-4 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={textVariants}
            >
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Getting Started with BarokahAI
                  </h2>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Accessing Our Platform:
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Open your favorite browser and head over to the official
                    Barokah-AI website at barokah-ai.vercel.app. On the
                    homepage, you'll find a 'Get Started' button. Click it, and
                    you're ready to start chatting with the best AI!
                  </p>
                </div>

                <div className="mb-9">
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Start Interacting...
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Simply type your question or command in the chat box.
                    Barokah-AI will respond promptly and accurately. Feel free
                    to ask anything—from product details and tech support to
                    personal advice or a casual chat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Replace the text with the following snippet */}
        <div className="absolute right-0 top-5 z-[-1]">
          <svg
            width="238"
            height="531"
            viewBox="0 0 238 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="422.819"
              y="-70.8145"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 422.819 -70.8145)"
              fill="url(#paint0_linear_83:2)"
            />
            <rect
              opacity="0.3"
              x="426.568"
              y="144.886"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(51.2997 426.568 144.886)"
              fill="url(#paint1_linear_83:2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_83:2"
                x1="517.152"
                y1="-251.373"
                x2="517.152"
                y2="459.865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_83:2"
                x1="455.327"
                y1="-35.673"
                x2="455.327"
                y2="675.565"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-5 left-0 z-[-1]">
          <svg
            width="279"
            height="106"
            viewBox="0 0 279 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
                stroke="url(#paint0_linear_72:302)"
              />
              <path
                d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
                stroke="url(#paint1_linear_72:302)"
              />
              <path
                d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
                stroke="url(#paint2_linear_72:302)"
              />
              <path
                d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
                stroke="url(#paint3_linear_72:302)"
              />
            </g>

            {/* Replace the text with the following snippet */}
            <defs>
              <linearGradient
                id="paint0_linear_72:302"
                x1="256.267"
                y1="53.6717"
                x2="-40.8688"
                y2="8.15715"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_72:302"
                x1="256.267"
                y1="42.6717"
                x2="-40.8688"
                y2="-2.84285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_72:302"
                x1="256.267"
                y1="64.6717"
                x2="-40.8688"
                y2="19.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_72:302"
                x1="256.267"
                y1="76.6717"
                x2="-40.8688"
                y2="31.1572"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
