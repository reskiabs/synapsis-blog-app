"use client";

import Comments from "@/components/comments/Comments";
import Menu from "@/components/Menu/Menu";
import { fetchData } from "@/utils/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  const { slug } = useParams();
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const posts = await fetchData(`posts/${slug}`);
        setPostData(posts);

        const users = await fetchData(`users`);
        const currentUser = users.find((user) => user.id === posts?.user_id);
        setUserData(currentUser);

        const comments = await fetchData("comments");
        const filteredComments = comments.filter(
          (comment) => comment.post_id === posts?.id
        );
        setCommentData(filteredComments);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{postData?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>
                {userData?.name || "John Doe"}
              </span>
              <span className={styles.date}>
                {userData?.email || "johndoe@example.com"}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>{postData?.body}</p>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              harum ab sapiente alias quaerat totam, tempore aliquid hic! Odio,
              perspiciatis! Quo quas quibusdam odio labore nobis optio
              praesentium, accusantium vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              harum ab sapiente alias quaerat totam, tempore aliquid hic! Odio,
              perspiciatis! Quo quas quibusdam odio labore nobis optio
              praesentium, accusantium vitae.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments commentData={commentData} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
