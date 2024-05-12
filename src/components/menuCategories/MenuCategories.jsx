import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/" className={`${styles.categoryItem} ${styles.culture}`}>
        Culture
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
      <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
        Styles
      </Link>
    </div>
  );
};

export default MenuCategories;
