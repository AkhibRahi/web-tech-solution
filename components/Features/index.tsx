import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-20">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="We provide the best web design and development services as a One-Stop Shop. We provide specialized and reasonably priced web design services to meet your needs. Select the most effective plans for creating a responsive website based on your requirements."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 text-center">
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
