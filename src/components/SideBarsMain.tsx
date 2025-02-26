"use client";
import Link from "next/link";
import styles from "../app/styles.module.css";

export default function SideBarsMain() {
  const modules = ["Introduccion", "Resolución de problemas"];
  const url = ["introduccion", "resolucionProblemas"];

  return (
    <div className="sideBars">
      <div className={styles.ulModules}>
        {modules.map((module, index) => {
          return (
            <Link
            key={"pepe"+index}
              href={url[index]}
              replace={false}
              className={styles.linkModules}
            >
              {module}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
