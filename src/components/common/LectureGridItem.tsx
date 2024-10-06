import {
  image,
  imageContainer,
  priceStyle,
  ratingStyle,
  star,
  tagGroup,
  tagStyle,
  titleStyle,
  wrapper,
} from "@/styles/components/common/lectureGridItem.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import StarIcon from "../icons/StarIcon";

interface LectureGridItemProps {
  id: string;
  title: string;
  tags: string[];
  rating: number;
  imageUrl?: string;
}

const LectureGridItem: FC<LectureGridItemProps> = ({
  id,
  title,
  tags,
  rating,
  imageUrl = "/default-image.jpg",
}) => {
  return (
    <Link href={`/lecture/${id}`} className={wrapper}>
      <div className={imageContainer}>
        <Image src={imageUrl} fill className={image} alt="" />
      </div>

      <p className={titleStyle}>{title}</p>
      <p className={priceStyle}>59000원</p>
      <div className={tagGroup}>
        {tags.map((tag) => (
          <li key={tag} className={tagStyle}>
            {tag}
          </li>
        ))}
        <li key="rating" className={ratingStyle}>
          <StarIcon className={star} />
          {rating}
        </li>
      </div>
    </Link>
  );
};

export default LectureGridItem;
