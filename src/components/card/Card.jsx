import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10.05.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.postTitle}>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/${post.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
