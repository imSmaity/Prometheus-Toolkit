import React from "react";
import Button from "./Button";

interface ICardProps {
  logo: string;
  title: string;
  description: string;
  totalRules: number;
}

const Card = ({ logo, title, description, totalRules }: ICardProps) => {
  return (
    <div className="border border-highlight p-[24px] max-w-[310px] flex flex-col gap-[16px]">
      <div className="flex gap-2">
        <img src={logo} alt="Logo" />
        <div className="text-md leading-2 font-bold">{title}</div>
      </div>
      <div className="text-secondary text-sm leading-1 line-clamp-3">
        <span className="bg-highlight text-xs leading-1 rounded-full px-[4px] py-[2px]">{`${totalRules} RULES`}</span>
        {description}
      </div>
      <Button>View Alert Rules</Button>
    </div>
  );
};

export default Card;
