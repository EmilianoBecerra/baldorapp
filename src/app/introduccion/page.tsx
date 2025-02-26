"use client";
import styles from "../styles.module.css";
import "../global.css";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="main_layout">
      <h2 className={styles.h2}>ALGEBRA</h2>
      <article className="article">
        <p>
          Es la rama de la Matemática que estudia la cantidad considerada del
          modo mas general posible.
        </p>
      </article>
      <h2 className={styles.h2}>
        CARACTER DEL ALGEBRA Y SU DIFERENCIA CON LA ARITMETICA
      </h2>
      <article className="article">
        <p>
          En <strong>Artimética</strong> las cantidades se representan por{" "}
          <b>números</b> que expresan valores <b>determinado</b>.
        </p>
        <div className={styles.example}>
          <h4 className={styles.h4_example}>Ejemplo:</h4>
          <p>
            20 expresa un sólo valor: <strong>Veinte</strong>.
          </p>
        </div>{" "}
        <p>
          En <strong>Algebra</strong>, para lograr la <b>generalización</b>, las
          cantidades se representan por medio de <b>letras</b>, las cuales
          pueden representar <b>todos los valores.</b>
        </p>
        <div className={styles.example}>
          <h4 className={styles.h4_example}>Ejemplo:</h4>
          <p>
            <b>a</b> representa el <b>valor que nosotros le asignemos</b> por lo
            tanto puede representar el 20, o más de 20 o cualquier otro número.
          </p>
          <p className={styles.note}>
            <strong>Aclaración:</strong> Cuando en un problema asignamos el
            valor determinado a una letra, esa letra no puede representar (en el
            mismo problema) otro valor distinto del que le hemos asignado.
          </p>
        </div>
      </article>
      <h2 className={styles.h2}>NOTACION ALGEBRAICA</h2>
      <article className="article">
        <p>
          {" "}
          Los <b>símbolos</b> usados en Algebra para represetar las cantidades
          son los <b>números</b> y las <b>letras</b>.
        </p>
        <ul className={styles.introductionList}>
          <li>
            Los <strong>números</strong> se emplean para representar cantidades
            conocidas y determinadas.
          </li>
          <li>
            Las <strong>letras</strong> se emplean para representar toda clase
            de cantidades, ya sean conocidas o desconocidas
          </li>
          <li>
            Las <strong>cantidades desconocidas</strong> se representan por las
            últimas letras del albafeto: <em>u, v, w, x, y ,z</em>.
          </li>
        </ul>
      </article>
      <h2 className={styles.h2}>FORMULAS</h2>
      <article className="article">
        <p>
          <strong>Fórmula algebraica</strong> es la representación, por medio de
          letras, de una regla o de un principio general.
        </p>
        <div className={styles.example}>
          <h4 className={styles.h4_example}>Fórmula:</h4>
          <p>
            La Geometría enseña que el área de un rectángulo <b>es</b> igual al
          </p>
          <b>producto</b> de su base <b>por</b> su altura.
          <br /> A = b x h<br />
          <em>
            *Llamando <b>A</b> al <b>área</b> del rectángulo, <b>b</b> a la
            <b> base</b> y <b>h</b> a la <b>altura</b>.
          </em>
        </div>
        <p>
          La fórmula representará el modo general para calcular el área de
          cualquier rectángulo y sólo bastará con sustituir <b>b</b> y <b>h </b>
          de la fórmula por los valores en el caso dado.
        </p>
        <div className={styles.example}>
          <h4 className={styles.h4_example}>Ejemplo:</h4>
          <p>
            Así, la base de un rectángulo de 3m. y la altura 2m., su área será:
          </p>
          <br />A = b x h = 3m. x 2m. = 6 m<sup>2</sup>
        </div>
      </article>
      <h2 className={styles.h2}>SIGNOS DEL ALGEBRA</h2>
      <article className="article">
        <p>Los signos empleados en Algebra son de tres clases:</p>
        <ul className={styles.introductionList}>
          <li>
            <strong>Signos de Operación</strong>
          </li>
          <p>Se verifican las mismas operaciones que en Aritmética:</p>
          <ul>
            <li className={styles.introductionLi}>Suma (+)</li>
            <li className={styles.introductionLi}>Resta (-)</li>
            <li className={styles.introductionLi}>Multiplicación (*)</li>
            <li className={styles.introductionLi}>División (/)</li>
            <li className={styles.introductionLi}>
              Elevación de Potencias (a<sup>x</sup>)
            </li>
            <li className={styles.introductionLi}>Extracción de Raíces (√a)</li>
          </ul>
          <li>
            <strong>Signos de Relación</strong>
          </li>
          <p>
            Se emplean para indicar la relación que existe entre dos cantidades
          </p>
          <ul>
            <li className={styles.introductionLi}>Igualdad (=)</li>
            <li className={styles.introductionLi}>Mayor que ({">"})</li>
            <li className={styles.introductionLi}>Menor que ({"<"})</li>
          </ul>
          <li>
            <strong>Signos de Agrupación</strong>
          </li>
          <p>
            Indican que la operación colocada entre ellos debe efectuarse
            primero.
          </p>
          <ul>
            <li className={styles.introductionLi}>
              Paréntesis ordinario ( () )
            </li>
            <li className={styles.introductionLi}>Corchetes ( [ ] )</li>
            <li className={styles.introductionLi}>Llaves ( {"{ }"} )</li>
            <li className={styles.introductionLi}>Barra o vínculo ( | | )</li>
          </ul>
        </ul>
      </article>
      <h2 className={styles.h2}> CANTIDADES POSITIVAS Y NEGATIVAS </h2>
      <article className="article">
        <p>
          En algebra, cuando se estudian cantidades que pueden tomarse en{" "}
          <b>dos sentidos opuestos </b>o que son de{" "}
          <b>condición o de modo de ser opuestos, </b>se expera el sentido,
          condición o modo de ser(valor relativo) de la cantidad por medio de
          los <b>signos + y - .</b>{" "}
        </p>
        <p>
          Anteponiendo el <strong>signo + </strong> a las cantidades positivas y
          el <strong> signo - </strong> a las cantidades negativas. De esta
          forma, el <b>haber </b> y el camino recorrido a la{" "}
          <b>derecha y hacia arriba de un punto </b> se designa con el{" "}
          <b>signo + </b> y las <b>deudas </b> y el camino recorrido a la{" "}
          <b>izquierda o hacia abajo de un punto </b> con el <b>signo -</b>.
        </p>
        <Link href={"exercises1"}>
          <button className="button_exercises">Ejercicios {">>>"}</button>
        </Link>
      </article>
      <h2 className={styles.h2}>CERO</h2>
      <article className="article">
        <p>
          Significa la ausencia de cantidad. Así, representar el estado
          económico de una persona por 0, equivale a decir que no tiene ni haber
          ni deudas. Las <strong>cantidades positivas </strong> son{" "}
          <b> mayores </b> que cero y las <strong>negativas </strong> son{" "}
          <b>menores </b> que cero.
        </p>
      </article>
    </div>
  );
}
