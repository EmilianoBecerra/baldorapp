import { ChangeEvent, useState } from "react";
import styles from "../app/styles.module.css";
import "../app/global.css";
import { respuestasCorrectas } from "../app/utils/datosDB";

export default function InputExercise({ idRespuesta, sendData }) {
  const [respuestaUsuario, setRespuestaUsuario] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setRespuestaUsuario({ ...respuestaUsuario, [id]: e.target.value });
    sendData((prev: string[]) => ({
      ...prev,
      [id]: "none",
    }));
  };

  const corroborarRespuesta = (id: string) => {
    const urespuesta = respuestaUsuario[id] || "";
    const isTrue = +urespuesta === respuestasCorrectas[id];
    sendData((prev: string[]) => ({
      ...prev,
      [id]: isTrue ? "correcto" : "incorrecto",
    }));
    setDisabledButton(isTrue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div className="input_ejercicios">
      <input
        type="text"
        required
        value={respuestaUsuario[idRespuesta] || ""}
        onChange={(e) => handleChange(e, idRespuesta)}
        onKeyDown={handleKeyDown}
        className={styles.input_ejercicio}
        disabled={disabledButton}
      />
      <button
        className={styles.boton_ejercicio}
        onClick={() => corroborarRespuesta(idRespuesta)}
        disabled={disabledButton}
      >
        Responder
      </button>
    </div>
  );
}
