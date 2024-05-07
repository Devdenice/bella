import mockUp1 from "/app-mockup-img/mock-design-1.png";
import mockUp2 from "/app-mockup-img/mock-design-2.png";

const MobileMockUp = () => {
  return (
    // <div className="absolute inset-x-0 md:-bottom-72 flex items-center justify-center hidden">
    //   <div className="relative flex flex-row bg-red-300">
    //     <div className="absolute md:-left-16 z-20 bg-green-400">
    //       <img
    //         src={mockUp1}
    //         alt="mobile mockup"
    //         width={500}
    //         className="w-[50%]"
    //       />
    //     </div>
    //     <div className="relative md:-right-28 -bottom-12 z-0">
    //       <img
    //         src={mockUp2}
    //         alt="mobile mockup"
    //         width={500}
    //         className="w-[50%]"
    //       />
    //     </div>
    //   </div>
    // </div>

    // <div className="relative inset-x-0 flex items-center justify-center bg-red-200">
    //   <div className="absolute flex">
    //     <div className="relative z-20 -right-28">
    //       <img src={mockUp1} width={500} className="border-2" />
    //     </div>
    //     <div className="relative -left-28 z-0">
    //       <img src={mockUp2} width={500} className="border-2" />
    //     </div>
    //   </div>
    // </div>
    <div className="relative max-w-[270px] xs:max-w-[300px] lg:max-w-[400px] mx-auto -top-0 md:-top-40">
      <div className="relative">
        <div className="flex">
          <div className="absolute inset-x-0 flex items-center justify-center w-36 h-36 mx-auto top-32 bg-black blur-[120px]  rounded-full"></div>
          <div className="absolute -left-28 lg:-left-32 z-20">
            <img
              src={mockUp1}
              width={500}
              className="w-[350px] xs:w-[370px] lg:w-[470px]"
            />
          </div>
          <div className="absolute -right-24 lg:-right-28 lg: top-16 z-0">
            <img
              src={mockUp2}
              width={500}
              className="w-[350px] xs:w-[370px] lg:w-[470px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockUp;
