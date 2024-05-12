"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./userLinks.module.css";

const UserLinks = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link href="/users" className={styles.link}>
        Users
      </Link>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/users">Users</Link>
        </div>
      )}
    </>
  );
};

export default UserLinks;
