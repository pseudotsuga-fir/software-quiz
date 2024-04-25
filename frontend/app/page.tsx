import styles from "./home.module.scss";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>We're up and running!</h1>
      <img className={styles.pigeonPic} src="/cool_ass_pigeon.jpg" />
    </div>
  );
}
