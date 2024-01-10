"use client";
import Image from "next/image";
import styles from "./styles.module.css";

import { useOnboardingContext } from "@/context/MyContext";

export default function Footer() {
  const { session, status, setMenuOpen, menuOpen, hideAside, onTable } =
    useOnboardingContext();

  return (
    <footer className={`${hideAside ? styles.onTable : ""} ${styles.footer}`}>
      <Image alt="logo" width={198} height={122} src="/images/Logo.png"></Image>
      <ul>
        <li>Disclaimer</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
        <li>Twitter</li>
      </ul>
    </footer>
  );
}
