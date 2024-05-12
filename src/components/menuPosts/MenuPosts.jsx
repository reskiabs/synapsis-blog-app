import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Culture</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      {/* Card */}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>Styles</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
