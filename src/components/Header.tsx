import logo from "../assets/images/logo.svg";
import githubIcon from "../assets/icons/github.svg";

const Header = () => {
  return (
    <div className="flex justify-between px-[200px] border-b border-gray items-baseline">
      <img src={logo} alt="Logo" />
      <img src={githubIcon} alt="Github icon" className="pb-2" />
    </div>
  );
};

export default Header;
