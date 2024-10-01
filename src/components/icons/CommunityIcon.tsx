import { IconProps } from "@/types/IconProps";

const CommunityIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M12 2a9 9 0 1 0 0 18v2.5c0 .381.412.625.742.434 1.94-1.123 7.067-4.827 8.072-10.124l.016-.09c.044-.241.086-.483.111-.732.038-.328.058-.658.059-.988a9 9 0 0 0-9-9Z" />
  </svg>
);

export default CommunityIcon;
