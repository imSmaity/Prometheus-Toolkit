import { ChangeEvent } from "react";
import searchIcon from "../assets/icons/search.svg";

interface ISearchProps {
  text: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ text, handleSearch }: ISearchProps) => {
  return (
    <div className="border border-gray p-[7px] flex gap-2 rounded-sm">
      <img src={searchIcon} alt="Search" />
      <input
        value={text}
        onChange={handleSearch}
        placeholder="Search for a component"
        className="outline-none w-full text-sm leading-1"
      />
      <div className="border-highlight bg-highlight-2 w-[18px] h-[18px] flex justify-center text-xs leading-1 font-bold rounded-sm">
        /
      </div>
    </div>
  );
};

export default Search;
