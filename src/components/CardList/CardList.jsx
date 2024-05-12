"use client";

import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const ITEMS_PER_PAGE = 5; // Ubah sesuai kebutuhan

const CardList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const endpoint = "posts";
        const responseData = await fetchData(endpoint);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {currentItems.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Pagination
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        currentPage={currentPage}
        totalItems={data.length}
      />
    </div>
  );
};

export default CardList;
