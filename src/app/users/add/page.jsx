"use client";

import { createUser } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./userAdd.module.css";
const UserAdd = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    try {
      const userData = {
        name: name,
        email: email,
        gender: gender,
        status: "active",
      };
      const newUser = await createUser(userData);
      console.log("User created successfully:", newUser);
      router.push("/users");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Update User</h1>
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
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name=""
              id=""
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={handleSubmit} className={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserAdd;
