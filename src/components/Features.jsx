import React from "react";
import featuresData from "../data/featuresData";
import SectionTitle from "./SectionTittle";
import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Explore the Key Features of BarokahAI and Discover Ease and Excellence in Every Interaction. We hope your experience here will be both beneficial and satisfying."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
