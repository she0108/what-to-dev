"use client";

import SearchBar from "@/components/common/SearchBar";
import { wrapper } from "@/styles/pages/search.css";
import { useState } from "react";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const onSearch = () => {
    console.log(`search "${value}"`);
  };

  return (
    <main className={wrapper}>
      <SearchBar
        placeholder="강의 제목, 분야, 기술 스택을 검색해보세요"
        value={value}
        onValueChange={(e) => setValue(e.target.value)}
        onSearch={onSearch}
      />
    </main>
  );
};

export default Search;
