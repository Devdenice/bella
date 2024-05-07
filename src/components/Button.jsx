import { useMediaQuery } from "@react-hook/media-query";

const Button = ({ title, orange, orangeNotRounded, whiteNotRounded }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <button
      className={`${orange ? "bg-[#FA4A0C] border-none text-white" : ""} ${
        isMobile ? "border-[#FA4A0C] text-[#FA4A0C]" : ""
      } ${isDesktop ? "text-white border-white" : ""} ${
        orangeNotRounded ? "bg-[#FA4A0C] border-none text-white rounded-lg" : ""
      } ${
        whiteNotRounded ? "text-white border-white rounded-lg" : ""
      } border-2 px-8 py-2.5 rounded-3xl font-semibold tracking-wider w-auto`}
    >
      {title}
    </button>
  );
};

export default Button;
