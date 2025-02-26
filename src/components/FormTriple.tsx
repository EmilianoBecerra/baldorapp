import { useState, ChangeEvent } from "react";
import "../app/global.css";
import styles from "../app/styles.module.css";
import { respuestasCorrectas } from "../app/utils/datosDB";

export default function FormTriple({ idRespuesta, sendData }) {
  const [respuestaUsuario, setRespuestaUsuario] = useState<{
    [key: number]: string;
  }>({
    "7": "",
    "8": "",
    "11": "",
  });
  const [disabledButton, setDisabledButton] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const value = e.target.value;
    if (value === "" || value === "-" || /^-?\d+$/.test(value)) {
      setRespuestaUsuario((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = () => {
    const respuestaCorrecta = respuestasCorrectas[idRespuesta];
    const respuestasUsuarioNumericas = Object.fromEntries(
      Object.entries(respuestaUsuario).map(([key, value]) => [
        key,
        Number(value),
      ])
    );
  
    const isTrue =
      JSON.stringify(respuestasUsuarioNumericas) ===
      JSON.stringify(respuestaCorrecta);
    sendData((prev: string[]) => ({
      ...prev,
      [idRespuesta]: isTrue ? "correcto" : "incorrecto",
    }));
    setDisabledButton(isTrue);
  };

  return (
    <div className={styles.div_ejercicios_triple}>
      <input
        type="text"
        required
        value={respuestaUsuario["7"] || ""}
        onChange={(e) => {
          handleChange(e, "7");
        }}
        className={styles.input_ejercicio}
        style={{ margin: "0px" }}
        placeholder="7 a.m."
      />
      <input
        type="text"
        required
        value={respuestaUsuario["8"] || ""}
        onChange={(e) => {
          handleChange(e, "8");
        }}
        className={styles.input_ejercicio}
        style={{ margin: "0px" }}
        placeholder="8 a.m."
      />
      <input
        type="text"
        required
        value={respuestaUsuario["11"] || ""}
        onChange={(e) => {
          handleChange(e, "11");
        }}
        className={styles.input_ejercicio}
        style={{ margin: "0px" }}
        placeholder="11 a.m."
      />
      <button
        className={styles.boton_ejercicio}
        onClick={handleSubmit}
        disabled={disabledButton}
      >
        Responder
      </button>
    </div>
  );
}
