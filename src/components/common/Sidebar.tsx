"use client";

import {
  activeIcon,
  activeLink,
  inactiveIcon,
  inactiveLink,
  wrap,
} from "@/styles/components/common/sidebar.css";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";
import CommunityIcon from "../icons/CommunityIcon";
import MypageIcon from "../icons/MypageIcon";
import HomeIcon from "../icons/HomeIcon";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const currentPath = usePathname();

  const getLinkClassName = (path: string) => {
    return path === currentPath ? activeLink : inactiveLink;
  };

  const getIconClassName = (path: string) => {
    return path === currentPath ? activeIcon : inactiveIcon;
  };

  return (
    <nav className={wrap}>
      <Link href="/">
        <Image src="/DAVA.svg" width={100} height={100} alt="service logo" />
      </Link>
      <Link className={getLinkClassName("/")} href="/">
        <HomeIcon className={getIconClassName("/")} /> Home
      </Link>
      <Link className={getLinkClassName("/search")} href="/search">
        <SearchIcon className={getIconClassName("/search")} />
        Search
      </Link>
      <Link className={getLinkClassName("/community")} href="/community">
        <CommunityIcon className={getIconClassName("/community")} />
        Community
      </Link>
      <Link className={getLinkClassName("/mypage")} href="/mypage">
        <MypageIcon className={getIconClassName("/mypage")} />
        Mypage
      </Link>
    </nav>
  );
};

export default Sidebar;
