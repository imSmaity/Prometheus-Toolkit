import Button from "./Button";
import no_logo_found from "../assets/icons/alert_Icons/empty.svg";

interface ICardProps {
  logo: string;
  title: string;
  description: string;
  handleOpenAlert: () => void;
  totalRules: number;
}

const Card = ({
  logo,
  title,
  description,
  handleOpenAlert,
  totalRules,
}: ICardProps) => {
  return (
    <div className="border border-highlight p-[24px] max-w-[310px] flex flex-col gap-[16px]">
      <div className="flex gap-2">
        <img src={logo || no_logo_found} alt="Logo" className="w-5 h-5" />
        <div className="text-md leading-2 font-bold">{title}</div>
      </div>
      <div className="text-secondary text-sm leading-1 line-clamp-3">
        <span className="bg-highlight text-xs leading-1 rounded-full px-[4px] py-[2px]">{`${totalRules} RULES`}</span>
        {description}
      </div>
      <Button onClick={handleOpenAlert}>View Alert Rules</Button>
    </div>
  );
};

export default Card;
