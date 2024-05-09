"use client";

import { useUserStore } from "@/hooks/appstate";
import styles from "./home.module.scss";

export default function Home() {
  async function fetchQuizzes() {
    await fetch("/quizzes").then((response) => response.json());
    console.log(useUserStore.getState().user);
  }

  return (
    <div className={styles.home}>
      <h1>We're up and running!</h1>
      <img className={styles.pigeonPic} src="/cool_ass_pigeon.jpg" />
      <button onClick={fetchQuizzes}>Test Auth</button>
    </div>
  );
}
