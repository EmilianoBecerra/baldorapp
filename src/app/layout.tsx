import React from "react";
import { Geist } from "next/font/google";
import "./global.css";
import styles from "./styles.module.css"
import type { Metadata } from "next";
import SideBarsMain from "../components/SideBarsMain";
import Link from "next/link";

export const metada: Metadata = {
  title: "Baldorapp!",
  description: "Bienvenidos a Baldorapp!",
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <header className="header">
          <Link href={"/"} className={styles.linkH1}><h1 className="h1">BaldorApp!</h1></Link>
        </header>
        <main>
          <SideBarsMain/>
          {children}
          </main>
      </body>
    </html>
  );
}
