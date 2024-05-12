"use client";

import { fetchData, updateUser } from "@/utils/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./updateUser.module.css";
const UpdateUser = () => {
  const router = useRouter();
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const endpoint = `users/${userId}`;
        const responseData = await fetchData(endpoint);

        setName(responseData.name);
        setEmail(responseData.email);
        setGender(responseData.gender);
        setStatus(responseData.status);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDataFromApi();
  }, []);

  const handleSubmit = async () => {
    try {
      const userData = {
        name: name,
        email: email,
        gender: gender,
        status: status,
      };
      await updateUser(userId, userData);
      console.log("User updated successfully");
      router.push("/users");
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add User</h1>
        <div className={styles.formContainer}>
          <div>
            <p className={styles.label}>Name</p>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p className={styles.label}>Email</p>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className={styles.label}>Gender</p>
            <select
              defaultValue={gender}
              onChange={(e) => setGender(e.target.value)}
              name=""
              id=""
            >
              <option value="all" disabled>
                Select your option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p className={styles.label}>Status</p>
            <select
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
              name=""
              id=""
            >
              <option disabled value="alll">
                Select your option
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
