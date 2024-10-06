import {
  info,
  profileContainer,
  profileImage,
  ratingContainer,
  ratingStar,
  username,
  wrapper,
} from "@/styles/components/common/reviewItem.css";
import Image from "next/image";
import StarIcon from "../icons/StarIcon";

const ReviewItem: React.FC = () => {
  return (
    <div className={wrapper}>
      <div className={profileContainer}>
        <Image
          className={profileImage}
          src="/default-image.jpg"
          alt="profile"
          width={40}
          height={40}
        />
        <div className={info}>
          <p className={username}>눈사람</p>
          <div className={ratingContainer}>
            <StarIcon className={ratingStar} />
            <StarIcon className={ratingStar} />
            <StarIcon className={ratingStar} />
            <StarIcon className={ratingStar} />
            <StarIcon className={ratingStar} />
          </div>
        </div>
      </div>
      아 너무 좋아요! 이해도 쏙쏙되고 자바스크립트 기초수업 듣고 이 수업을
      들으니 유레카라는 소리가 절로 나옵니다!
    </div>
  );
};

export default ReviewItem;
