"use client";

import { fetchData } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./featured.module.css";

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const endpoint = "posts";
        const responseData = await fetchData(endpoint);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, reski here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data[0]?.title}</h1>
          <p className={styles.desc}>{data[0]?.body}</p>
          <Link href={`/${data[0]?.id}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
