import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resto | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>

      <h1>About</h1>
    </div>
  );
}
