"use client";

import {
  activeIcon,
  activeLink,
  inactiveIcon,
  inactiveLink,
  wrap,
} from "@/styles/components/common/bottomTab.css";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";
import CommunityIcon from "../icons/CommunityIcon";
import MypageIcon from "../icons/MypageIcon";
import HomeIcon from "../icons/HomeIcon";
import { usePathname } from "next/navigation";

const BottomTab: React.FC = () => {
  const currentPath = usePathname();

  const getLinkClassName = (path: string) => {
    return path === currentPath ? activeLink : inactiveLink;
  };

  const getIconClassName = (path: string) => {
    return path === currentPath ? activeIcon : inactiveIcon;
  };

  return (
    <nav className={wrap}>
      <Link className={getLinkClassName("/")} href="/">
        <HomeIcon className={getIconClassName("/")} /> 홈
      </Link>
      <Link className={getLinkClassName("/search")} href="/search">
        <SearchIcon className={getIconClassName("/search")} />
        탐색
      </Link>
      <Link className={getLinkClassName("/community")} href="/community">
        <CommunityIcon className={getIconClassName("/community")} />
        커뮤니티
      </Link>
      <Link className={getLinkClassName("/mypage")} href="/mypage">
        <MypageIcon className={getIconClassName("/mypage")} />
        마이페이지
      </Link>
    </nav>
  );
};

export default BottomTab;
