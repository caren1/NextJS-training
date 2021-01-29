import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        doloribus similique unde minima maxime quasi numquam nostrum pariatur
        vitae recusandae mollitia quod libero explicabo, ea id, dolore a facere
        odit.
      </p>
      <Link href='/ninjas'><a className={styles.btn}> See Ninja Listing</a></Link>
      
    </div>
  );
}
