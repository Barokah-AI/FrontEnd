import featuresData from "../data/featuresData";
import SectionTitle from "./SectionTittle";
import SingleFeature from "./SingleFeature";
import { motion } from "framer-motion";

const Features = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={titleVariants} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }}>
            <SectionTitle title="Main Features" paragraph="Explore the Key Features of BarokahAI and Discover Ease and Excellence in Every Interaction. We hope your experience here will be both beneficial and satisfying." center />
          </motion.div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <motion.div key={feature.id} initial="hidden" whileInView="visible" variants={itemVariants} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}>
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
