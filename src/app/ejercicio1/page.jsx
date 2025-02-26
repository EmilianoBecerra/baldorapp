"use client";
import styles from "../styles.module.css";
import "../global.css";
import InputExercise from "../../components/InputExercise";
import { useState } from "react";
import FormTriple from "../../components/FormTriple";

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
      <div className={styles.ejemplo}>
        <h4 className={styles.h4_ejemplo}>Enunciado:</h4>
        <p>
          1{") "}
          <b>
            Un hombre cobra $130. Paga una deuda de $80 y luego hace compras por
            valor de $95. ¿Cuánto tiene ahora?
          </b>
        </p>
        <h4 className={styles.h4_ejemplo}>Resolución:</h4>
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
      <div className="div_ejercicios">
        <h2 style={{ textAlign: "center" }}>EJERCICIOS</h2>
        <ol className="ol_ejercicio">
          <div className={`div_ejercicio ${dataInput.ej1}`}>
            <li className="li_ejercicio">
              Pedro debía 60 bolivares y recibió 320. Expresar su estado
              económico.
            </li>
            <InputExercise idRespuesta={"ej1"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej2}`}>
            <li className="li_ejercicio">
              Un hombre que tenía 1170 sucres hizo una compra por valor de 1515.
              Expresa su estado económico.
            </li>
            <InputExercise idRespuesta={"ej2"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej3}`}>
            <li className="li_ejercicio">
              Tenía $200. Cobré $56 y pagué deudas por $189. ¿Cuánto tengo?
            </li>
            <InputExercise idRespuesta={"ej3"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej4}`}>
            <li className="li_ejercicio">
              Compro ropa por valor 665 soles y alimentos por 1178. Si después
              recibo 2280 ¿Cuál es mi estado económico?
            </li>
            <InputExercise idRespuesta={"ej4"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej5}`}>
            <li className="li_ejercicio">
              Tenía $20. Pagué $15 que debía, después cobré $40 y luego hice
              gastos por $75. ¿Cuánto tengo?
            </li>
            <InputExercise idRespuesta={"ej5"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej6}`}>
            <li className="li_ejercicio">
              Enrique hace una compro por $67, después recibe $72, luego hace
              otra compra por $16 y después recibe $2. Expresar su estado
              económico
            </li>
            <InputExercise idRespuesta={"ej6"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej7}`}>
            <li className="li_ejercicio">
              Después de recibir 200 colones hago tres gastos por 78, 81 y 93.
              Recibo entonces 41 y luego hago un nuevo hasto por 59. ¿Cuánto
              tengo?
            </li>
            <InputExercise idRespuesta={"ej7"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej8}`}>
            <li className="li_ejercicio">
              Pedro tenía tres deudas de $45, $66 y $79 respectivamente.
              Entonces recibe $200 y hace un gasto de $10. ¿Cuánto tiene?
            </li>
            <InputExercise idRespuesta={"ej8"} sendData={handleData} />
          </div>
        </ol>
      </div>

      <div className={styles.ejemplo}>
        <h4 className={styles.h4_ejemplo}>Enunciado:</h4>
        <p>
          2{") "}
          <b>
            A las 6 a.m el termómetro marca -4°. A las 9 a.m ha subido 7° y
            desde esta hora hasta las 5 p.m ha bajado 11°. Expresar la
            temperatura a las 5 p.m.
          </b>
        </p>
        <h4 className={styles.h4_ejemplo}>Resolución:</h4>
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
      <div className="div_ejercicios">
        <h2 style={{ textAlign: "center" }}>EJERCICIOS</h2>
        <ol className="ol_ejercicio">
          <div className={`div_ejercicio ${dataInput.ej9}`}>
            <li className="li_ejercicio">
              A las 9 a.m el termómetro marca 12° y de esta hora a las 8 p.m. ha
              bajado 15°. Expresar la temperatura a las 8 p.m.
            </li>
            <InputExercise idRespuesta={"ej9"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej10}`}>
            <li className="li_ejercicio">
              A las 6 a.m. el termómetro marca -3°. A las 10 a.m. la temperatura
              es 8° más alta y desde esta hora hasta las 9 p.m. ha bajado 6°.
              Expresar la temperatura a las 9 p.m.
            </li>
            <InputExercise idRespuesta={"ej10"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej11}`}>
            <li className="li_ejercicio">
              A la 1 p.m. el termómetro marca 15° y a las 10 p.m. marca -3°.
              ¿Cuántos grados ha bajado la temperatura?
            </li>
            <InputExercise idRespuesta={"ej11"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej12}`}>
            <li className="li_ejercicio">
              A las 3 a.m. el termómetro marca -8° y al mediodía 5°. ¿Cuántos
              grados ha subido la temperatura?
            </li>
            <InputExercise idRespuesta={"ej12"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej13}`}>
            <li className="li_ejercicio">
              A las 8 a.m. el termómetro marca -4°, a las 9 a.m. ha subido 7°, a
              las 4 p.m. ha subido 2° más y a las 11 p.m. ha bajado 11°.
              Expresar la temperatura a las 11 a.m.
            </li>
            <InputExercise idRespuesta={"ej13"} sendData={handleData} />
          </div>
          <div className={`div_ejercicio ${dataInput.ej14}`}>
            <li className="li_ejercicio">
              A las 6 a.m. el termómetro marca -8°. De las 6 a.m. a las 11 a.m.
              sube a razón de 4° por hora. Expresar la temperatura a las 7 a.m.,
              a las 8 a.m. y a las 11 a.m.
            </li>
            <FormTriple idRespuesta={"ej14"} sendData={handleData} />
          </div>
        </ol>
      </div>
    </div>
  );
}
