import {
  image,
  imageContainer,
  ratingStyle,
  star,
  tagGroup,
  tagStyle,
  textContainer,
  titleStyle,
  wrapper,
} from "@/styles/components/common/lectureListItem.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import StarIcon from "../icons/StarIcon";

interface LectureListItemProps {
  id: string;
  title: string;
  tags: string[];
  rating: number;
  imageUrl?: string;
}

const LectureListItem: FC<LectureListItemProps> = ({
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
      <div className={textContainer}>
        <p className={titleStyle}>{title}</p>
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
      </div>
    </Link>
  );
};

export default LectureListItem;
