import Button from "../components/Button";
import { useMediaQuery } from "@react-hook/media-query";

const DownloadTheApp = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className="md:bg-[url('/download/download.jpg')] bg-[#252B42] bg-none bg-cover bg-center absolute left-0 w-full h-4/6 flex flex-col gap-y-6 justify-center">
      <div className="absolute inset-0 md:bg-black md:bg-opacity-50 flex flex-col gap-y-6 items-center justify-center">
        <div className="flex flex-col text-center gap-y-3 max-w-[200px] md:max-w-full mx-auto">
          <h3 className="text-white text-2xl font-bold">
            Download the app now.
          </h3>
          {isMobile ? (
            <>
              <p className="md:text-white">
                Most calendars are designed for teams.
              </p>
            </>
          ) : (
            <>
              <p className="md:text-white">
                Available on your favorite store. Start your premium experience
                now
              </p>
            </>
          )}
        </div>
        <div className="flex">
          <div className="w-auto flex flex-col sm:flex-row sm:gap-x-5 lg:flex-row lg:gap-x-8 mx-auto gap-y-3">
            <Button title="Playstore" orangeNotRounded />
            <Button title="App store" whiteNotRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTheApp;
