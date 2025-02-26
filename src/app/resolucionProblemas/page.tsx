"use client";
import "../global.css";
import styles from "../styles.module.css";

export default function MainResolution() {
  return (
    <div className="main_layout">
      <h2 className={styles.h2}>
        MODO DE RESOLVER LOS PROBLEMAS EN ARITMETICA Y EN ALGEBRA
      </h2>
      <h4 className={styles.h4}>
        Diferencia entre resolución aritmética y algebraica
      </h4>
      <div className={styles.example}>
        <h4 className={styles.h4_example}>Enunciado:</h4>
        <p>
          La edad de A y B suman 48 años. Si la edad de B es 5 veces la edad de
          A, ¿qué edad tiene cada uno?
        </p>
        <p style={{ textAlign: "left" }}>
          <b>METODO ARITMETICO</b>
        </p>
        <div className="div_example_separation">
          <ul className="ul_example_separation">
            <li className={styles.li_example_resolution}>
              Edad de A más edad de B = 48 años.
            </li>
            <li className={styles.li_example_resolution}>
              Cómo la edad de B es 5 veces la de A tendremos:
            </li>
            <li className={styles.li_example_resolution}>
              Edad de A más 5 veces la edad de A = 48 años
            </li>
            <li className={styles.li_example_resolution}>
              O sea, 6 veces la edad de A = 48 años
            </li>
            <li className={styles.li_example_resolution}>
              Edad de A = 8 años <b>[R.]</b>
            </li>
            <li className={styles.li_example_resolution}>
              Edad de B = 8 años * 5 = 40 años <b>[R.]</b>
            </li>
          </ul>
        </div>
        <p style={{ textAlign: "left" }}>
          <b>METODO ALGEBRAICO</b>
        </p>
        <div className="div_example_separation">
          <ul className="ul_example_separation">
            <li className={styles.li_example_resolution}>
              Cómo la edad de A es desconocida la represento cómo X.
            </li>
            <li className={styles.li_example_resolution}>Sea x = edad de A.</li>
            <li className={styles.li_example_resolution}>
              Entonces, 5x = edad de B.
            </li>
            <li className={styles.li_example_resolution}>
              Cómo ambas edades suman 48 años, tendremos:{" "}
            </li>
            <li className={styles.li_example_resolution}>x + 5x = 48 años</li>
            <li className={styles.li_example_resolution}>6x = 48 años.</li>
            <li className={styles.li_example_resolution}>
              Si 6 veces <b>X</b> equivale a 48 años, entonces, <b>X</b> valdrá
              la sexta parte de 48 años
            </li>
            <li className={styles.li_example_resolution}>
              x = 8 años, edad de A <b>[R.]</b>
            </li>
            <li className={styles.li_example_resolution}>
              5x = 8 años * 5 = 40 años, edad de B. <b>[R.]</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
