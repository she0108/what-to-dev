import { IconProps } from "@/types/IconProps";

const StarIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m8 11.513 2.767 1.674a.665.665 0 0 0 .993-.72l-.733-3.147 2.446-2.12a.665.665 0 0 0-.38-1.167l-3.22-.273-1.26-2.973a.667.667 0 0 0-1.226 0l-1.26 2.966-3.22.274a.665.665 0 0 0-.38 1.166l2.446 2.12-.733 3.147a.665.665 0 0 0 .993.72L8 11.513Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default StarIcon;
