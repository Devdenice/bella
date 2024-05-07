import logo from "/logo/logo.svg";
import twitter from "/socials/twitter.svg";
import facebook from "/socials/facebook.svg";
import instagram from "/socials/instagram.svg";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col md:flex-row items-center md:justify-around gap-y-4">
        <div className="hidden md:block">
          <img src={logo} width={150} />
        </div>
        <div className="flex gap-x-5">
          <img src={twitter} width={30} />
          <img src={facebook} width={25} />
          <img src={instagram} width={30} />
        </div>
        <div>
          <p className="font-bold text-sm">Copywright 2020 Bella Onojie.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
