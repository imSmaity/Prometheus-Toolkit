import last9 from "../assets/images/last9.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-[200px] border-t border-gray py-[18px] mt-auto">
      <div className="text-sm leading-1 font-medium text-secondary">
        Contribute on GitHub
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-sm leading-1 font-medium text-secondary">
          Maintained by Last9
        </div>
        <img src={last9} alt="Github icon" className="pb-2" />
      </div>
    </div>
  );
};

export default Footer;
