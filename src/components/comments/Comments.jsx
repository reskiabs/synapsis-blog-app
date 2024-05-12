import Image from "next/image";
import styles from "./comments.module.css";

const Comments = ({ commentData }) => {
  return (
    <div className={styles.container}>
      <h1>Comments</h1>
      <div className={styles.write}>
        <textarea placeholder="Write a comment..." className={styles.input} />
        <button className={styles.button}>Send</button>
      </div>
      <div className={styles.comments}>
        {commentData?.map((comment) => (
          <div key={comment?.id} className={styles.comment}>
            <div className={styles.user}>
              <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />

              <div className={styles.userInfo}>
                <span className={styles.username}>{comment?.name}</span>
                <span className={styles.date}>{comment?.email}</span>
              </div>
            </div>
            <p className={styles.desc}>{comment?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
