import ReviewItem from "@/components/common/ReviewItem";
import {
  aside,
  main,
  thumbnail,
  thumbnailContainer,
  wrapper,
} from "@/styles/pages/detail.css";
import Image from "next/image";

const Detail: React.FC = () => {
  return (
    <main className={wrapper}>
      <div className={main}>
        <div className={thumbnailContainer}>
          <Image
            className={thumbnail}
            src="/default-image.jpg"
            alt="default"
            fill
          />
        </div>
      </div>
      <div className={aside}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </main>
  );
};

export default Detail;
