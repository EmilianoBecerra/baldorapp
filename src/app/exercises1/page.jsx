"use client";
import styles from "../styles.module.css";
import "../global.css";
import InputExercise from "../../components/InputExercise";
import { useState } from "react";

export default function Exercise1() {
  const [dataInput, setDataInput] = useState({});

  const handleData = (data) => {
    setDataInput(data);
  };

  return (
    <div className="main_layout">
      <h2
        className={styles.h2}
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        EJERCICIOS SOBRE CANTIDADES POSITIVAS Y NEGATIVAS
      </h2>
      <div className={styles.example}>
        <h4 className={styles.h4_example}>Enunciado:</h4>
        <p>
          1{") "}
          <b>
            Un hombre cobra $130. Paga una deuda de $80 y luego hace compras por
            valor de $95. ¿Cuánto tiene ahora?
          </b>
        </p>
        <h4 className={styles.h4_example}>Resolución:</h4>
        <p>
          Teniendo $130, pagó $80; luego, se quedó con $50. Después hace un
          gasto de $95 y cómo sólo tiene $50 incurre en una deuda de $45. Por lo
          tanto tiene actualmente -$45.
        </p>
        <math>
          <mrow>
            <mn>130</mn>
            <mo>-</mo>
            <mn>80</mn>
            <mo>=</mo>
            <mn>50</mn>
          </mrow>
        </math>
        <br />
        <math>
          <mrow>
            <mn>50</mn>
            <mo>-</mo>
            <mn>95</mn>
            <mo>=</mo>
            <mn>-45</mn>
          </mrow>
        </math>
        <p>
          <b> -45 R.</b>
        </p>
      </div>
      <div className="div_exercises">
        <h2 style={{ textAlign: "center" }}>EJERCICIOS</h2>
        <ol className="ol_exercise">
        <div className={`div_exercise ${dataInput.ejercicio1}`}>
            <li className="li_exercise">
              Pedro debía 60 bolivares y recibió 320. Expresar su estado
              económico.
            </li>
            <InputExercise idAnswer={"ejercicio1"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio2}`}>
            <li className="li_exercise">
              Un hombre que tenía 1170 sucres hizo una compra por valor de 1515.
              Expresa su estado económico.
            </li>
            <InputExercise idAnswer={"ejercicio2"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio3}`}>
            <li className="li_exercise">
              Tenía $200. Cobré $56 y pagué deudas por $189. ¿Cuánto tengo?
            </li>
            <InputExercise idAnswer={"ejercicio3"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio4}`}>
            <li className="li_exercise">
              Compro ropa por valor 665 soles y alimentos por 1178. Si después
              recibo 2280 ¿Cuál es mi estado económico?
            </li>
            <InputExercise idAnswer={"ejercicio4"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio5}`}>
            <li className="li_exercise">
              Tenía $20. Pagué $15 que debía, después cobré $40 y luego hice
              gastos por $75. ¿Cuánto tengo?
            </li>
            <InputExercise idAnswer={"ejercicio5"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio6}`}>
            <li className="li_exercise">
              Enrique hace una compro por $67, después recibe $72, luego hace
              otra compra por $16 y después recibe $2. Expresar su estado
              económico
            </li>
            <InputExercise idAnswer={"ejercicio6"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio7}`}>
            <li className="li_exercise">
              Después de recibir 200 colones hago tres gastos por 78, 81 y 93.
              Recibo entonces 41 y luego hago un nuevo hasto por 59. ¿Cuánto
              tengo?
            </li>
            <InputExercise idAnswer={"ejercicio7"} sendData={handleData} />
          </div>
          <div className={`div_exercise ${dataInput.ejercicio8}`}>
            <li className="li_exercise">
              Pedro tenía tres deudas de $45, $66 y $79 respectivamente.
              Entonces recibe $200 y hace un gasto de $10. ¿Cuánto tiene?
            </li>
            <InputExercise idAnswer={"ejercicio8"} sendData={handleData} />
          </div>
        </ol>
      </div>

      <div className={styles.example}>
        <h4 className={styles.h4_example}>Enunciado:</h4>
        <p>
          2{") "}
          <b>
            A las 6 a.m el termómetro marca -4°. A las 9 a.m ha subido 7° y
            desde esta hora hasta las 5 p.m ha bajado 11°. Expresar la
            temperatura a las 5 p.m.
          </b>
        </p>
        <h4 className={styles.h4_example}>Resolución:</h4>
        <p>
          A las 6 a.m el termómetro marca: - 4°. Ubicamos el punto en la
          división cuatro de la escala a la izquierda.
        </p>
        <p> Cómo a las 9 a.m a subido 7°</p>
        <p>
          entonces, contamos siete de la escala hacía la derecha desde el punto
          menos cuatro, es decir, -4 + 7.
        </p>
        <p>La temperatura a las 9 a.m es: 3°.</p>
        <p>Cómo de las 9 a.m hasta las 5 p.m ha bajado 11°,</p>
        <p>
          contamos once divisiones de la escala hacía la izquierda desde el
          punto tres, es decir, 3 - 11.{" "}
        </p>
        <p>La temperatura a las 5 p.m es: - 8°.</p>
        <b>-8° R.</b>
        <br />
        <math>
          <mrow>
            <mn>-4°</mn>
            <mo>+</mo>
            <mn>7°</mn>
            <mo>=</mo>
            <mn>3°</mn>
          </mrow>
        </math>
        <br />
        <math>
          <mrow>
            <mn>3°</mn>
            <mo>-</mo>
            <mn>11°</mn>
            <mo>=</mo>
            <mn>-8</mn>
          </mrow>
        </math>
        <p>
          <b>-8° R.</b>
        </p>
      </div>
    </div>
  );
}
