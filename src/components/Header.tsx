import logo from "../assets/images/logo.svg";
import githubIcon from "../assets/icons/github.svg";

const Header = () => {
  return (
    <div className="flex justify-between px-[250px] border-b border-gray items-baseline sticky top-0 bg-white">
      <img src={logo} alt="Logo" />
      <a href="https://github.com/samber/awesome-prometheus-alerts">
        <img src={githubIcon} alt="Github icon" className="pb-2" />
      </a>
    </div>
  );
};

export default Header;
