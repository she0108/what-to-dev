import { IconProps } from "@/types/IconProps";

const HomeIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M12.6 3.45a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.5a1 1 0 0 0-.4-.8l-7-5.25Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HomeIcon;
