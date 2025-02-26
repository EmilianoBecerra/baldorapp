"use client";
import Link from "next/link";
import styles from "../app/styles.module.css";

export default function SideBarsMain() {
  const modules = ["Introduccion", "Resolución de problemas"];
  const url = ["introduccion", "resolucionProblemas"];

  return (
    <div className="sidebar">
      <div className={styles.ul_modulos}>
        {modules.map((module, index) => {
          return (
            <Link
            key={"pepe"+index}
              href={url[index]}
              replace={false}
              className={styles.link_modulos}
            >
              {module}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
