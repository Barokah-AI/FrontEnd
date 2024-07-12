import React from "react";
import SectionTitle from "./SectionTittle";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const About = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

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
          <div className="pb-16 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={textVariants}
              >
                <SectionTitle
                  title="Barokah-AI"
                  paragraph="BarokahAI is a digital friend who is here to answer all your questions quickly and precisely. Using artificial intelligence, BarokahAI provides the information you need. With advanced features and a user-friendly interface, BarokahAI is here to provide safe and reliable support. Let's explore new knowledge and find ease in every interaction with BarokahAI!"
                  mb="44px"
                />

                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Natural Language Processing" />
                      <List text="Machine Learning" />
                      <List text="Multi Language" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Personalization" />
                      <List text="Easy Integration" />
                      <List text="Security and Privacy" />
                    </div>
                  </div>
                </div>
              </motion.div>

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
                    src="/images/about/about-section-1.png"
                    alt="about-image"
                    className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-20 lg:py-28">
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
                  fill
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
                  <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Step by Step to Use Barokah-AI
                  </h2>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Accessing the Website or Application:
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Open your favorite browser and visit the official 
                  Barokah-AI website at barokah-ai.vercel.app. 
                  On the main page of the website or application, 
                  you will see a Get Started button to start a conversation. 
                  Just click to start chatting.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Starting Interaction:
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Please type your question or command in the chat box. 
                  Barokah-AI will respond quickly and accurately. 
                  You can ask anything from product information, 
                  technical assistance, personal advice, to casual chat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
