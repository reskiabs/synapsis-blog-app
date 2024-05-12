import Image from "next/image";
import Link from "next/link";
import styles from "./userCard.module.css";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className={styles.userCard}>
      <Image
        src="/p1.jpeg"
        alt="logo"
        width={50}
        height={50}
        className={styles.userImage}
      />
      <div className={styles.profileContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/fashion.png"
            alt="logo"
            width={50}
            height={50}
            className={styles.image}
          />
          <span
            className={styles.indicator}
            style={{
              backgroundColor: user.status === "active" ? "#16a34a" : "#9ca3af",
            }}
          />
        </div>
        <div className={styles.userInfo}>
          <h2 className={styles.userName}>{user.name}</h2>
          <p className={styles.userEmail}>{user.email}</p>
          <span className={styles.genderTag}>{user.gender}</span>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <Link href={`/users/edit/${user.id}`}>Edit</Link>
        <button onClick={onDelete} className={styles.button}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
