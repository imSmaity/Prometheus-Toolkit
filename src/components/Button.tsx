import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      className=" border border-gray py-2 text-md leading-1 font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
