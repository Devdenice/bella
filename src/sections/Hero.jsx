import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="md:bg-[url('/hero-bg/bg.jpg')] bg-none bg-cover bg-center absolute left-0 w-full h-5/6">
      <div className="absolute inset-0 md:bg-black md:bg-opacity-50">
        <div className="min-w-auto">
          <div className="text-center mt-6 lg:mt-12">
            <div className="flex flex-col gap-y-2">
              <p className="font-bold tracking-wider md:text-white">Food app</p>
              <h1
                className="text-2xl font-bold tracking-wide md:text-white lg:text-4xl lg:w-3/5 lg:mx-auto"
                style={{ lineHeight: 1.3 }}
              >
                Why stay hungry when you can order form Bella Onojie
              </h1>
            </div>
            <div className="mt-6 mb-10">
              <p className="text-xl tracking-wide leading-relaxed font-medium md:text-white">
                Download the bella onoje’s food app now on{" "}
              </p>
            </div>
            <div className="flex">
              <div className="w-auto flex flex-col lg:flex-row lg:gap-x-8 mx-auto gap-y-3">
                <Button title="Playstore" orange />
                <Button title="Appstore" mobileButton desktopButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
