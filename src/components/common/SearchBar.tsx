import {
  container,
  icon,
  input,
} from "@/styles/components/common/searchBar.css";
import SearchIcon from "../icons/SearchIcon";
import { ChangeEventHandler, FC, KeyboardEventHandler } from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = "검색어를 입력하세요",
  value,
  onValueChange,
  onSearch,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={container}>
      <SearchIcon className={icon} />
      <input
        className={input}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
