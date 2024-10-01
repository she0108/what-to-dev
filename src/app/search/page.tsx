"use client";

import LectureListItem from "@/components/common/LectureListItem";
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
      <LectureListItem
        id="1"
        title="[풀스택 완성] Supabase로 웹사이트 3개 클론하기 (Next.js 14)"
        tags={["HTML", "CSS"]}
        rating={4.5}
      />
    </main>
  );
};

export default Search;
