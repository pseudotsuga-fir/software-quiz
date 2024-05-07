"use client";

import styles from "./home.module.scss";
export default function Home() {
  async function fetchQuizzes() {
    await fetch("/quizzes").then((response) => response.json());
  }

  return (
    <div className={styles.home}>
      <h1>We're up and running!</h1>
      <img className={styles.pigeonPic} src="/cool_ass_pigeon.jpg" />
      <button onClick={fetchQuizzes}>Test Auth</button>
    </div>
  );
}
