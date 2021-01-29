import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        doloribus similique unde minima maxime quasi numquam nostrum pariatur
        vitae recusandae mollitia quod libero explicabo, ea id, dolore a facere
        odit.
      </p>
      <Footer />
    </div>
  );
}
