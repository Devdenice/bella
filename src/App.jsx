import DownloadTheApp from "./sections/DownloadTheApp";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import MobileMockUp from "./sections/MobileMockUp";
import Navigation from "./sections/Navigation";

function App() {
  return (
    <>
      <div className="relative overflow-x-hidden h-screen">
        <div className="wrapper">
          <section className="min-h-[100vh]">
            <Navigation />
            <Hero />
          </section>
          <section className="min-h-[90vh] md:min-h-[60vh] lg:min-h-[70vh]">
            <MobileMockUp />
          </section>
          <section className=" min-h-[480vh] sm:min-h-[460vh] md:min-h-[460vh] lg:min-h-[100vh]">
            <HowItWorks />
          </section>
          <section className=" lg:min-h-[100vh] flex items-center justify-center">
            <DownloadTheApp />
          </section>
          <section className="min-h-[100vh] lg:min-h-[20vh] flex items-center">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
