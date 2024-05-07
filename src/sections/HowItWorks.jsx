import { howItWorks } from "../constants";

const HowItWorks = () => {
  return (
    <div>
      <div className="flex flex-col lg:mb-16">
        <div className="order-2 md:order-1 w-full sm:w-[66%] h-0.5 bg-[#E4E4E4] mx-auto mb-12"></div>
        <h1 className=" order-1 text-[#252B42] md:order-2 text-center text-lg sm:text-xl md:2xl lg:text-3xl  mb-8 font-bold tracking-wide">
          How the app works
        </h1>
      </div>
      <div className="grid grid-cols-1">
        {howItWorks.map((item, index) => (
          <div
            key={item}
            className="flex flex-col gap-y-10 lg:flex-row items-center gap-x-20 justify-center"
          >
            <div
              className={`order-2 ${index === 1 ? "lg:order-2" : "lg:order-1"}`}
            >
              <img
                src={item.img}
                width={200}
                className="bg-cover bg-clip-border bg-center drop-shadow-2xl"
              />
            </div>
            <div
              className={`flex flex-col mt-10 items-center lg:items-start text-center lg:text-left max-w-[250px] sm:max-w-[300px] lg:max-w-[450px] gap-y-4  order-1 ${
                index === 1 ? "lg:order-1" : "lg:order-2"
              } `}
            >
              <p className="text-[#FA4A0C] font-semibold">{item.step}</p>
              <h3 className="text-2xl font-bold text-[#252B42]  lg:text-3xl lg:tracking-wide">
                {item.heading}
              </h3>
              <p className="leading-relaxed px-5 lg:px-0 lg:pr-32">
                {item.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
