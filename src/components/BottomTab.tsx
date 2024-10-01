import { icon, link, wrap } from "@/styles/components/bottomTab.css";
import Link from "next/link";
import SearchIcon from "./icons/SearchIcon";
import CommunityIcon from "./icons/CommunityIcon";
import MypageIcon from "./icons/MypageIcon";
import HomeIcon from "./icons/HomeIcon";

const BottomTab: React.FC = () => {
  return (
    <nav className={wrap}>
      <Link className={link} href="/">
        <HomeIcon className={icon} /> 홈
      </Link>
      <Link className={link} href="/search">
        <SearchIcon className={icon} />
        탐색
      </Link>
      <Link className={link} href="/community">
        <CommunityIcon className={icon} />
        커뮤니티
      </Link>
      <Link className={link} href="/mypage">
        <MypageIcon className={icon} />
        마이페이지
      </Link>
    </nav>
  );
};

export default BottomTab;
