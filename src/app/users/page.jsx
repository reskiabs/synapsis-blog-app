"use client";

import UserCard from "@/components/UserCard/UserCard";
import { deleteUser, fetchData } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./users.module.css";

const Users = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const endpoint = "users";
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

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResult(filteredData);
    }
  }, [data, searchQuery]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setData(data.filter((user) => user.id !== userId));
    } catch (error) {
      setError(`Error deleting user: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>People</h1>
        <div className={styles.headerContent}>
          <input
            type="text"
            placeholder="Search user here..."
            className={styles.input}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Link className={styles.button} href="/users/add">
            Add User
          </Link>
        </div>
      </div>
      <div className={styles.userListContainer}>
        {loading ? (
          <div className={styles.notFound}>
            <p>Please Wait...</p>
          </div>
        ) : searchResult.length > 0 ? (
          searchResult.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={() => handleDeleteUser(user.id)}
            />
          ))
        ) : (
          <div className={styles.notFound}>
            <p>404 | No User Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
