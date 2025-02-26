import { ChangeEvent, useState } from "react";
import styles from "../app/styles.module.css";
import "../app/global.css";

export default function InputExercise({ idAnswer, sendData }) {
  const correctAnswer = {
    ejercicio1: 320 - 60,
    ejercicio2: 1170 - 1515,
    ejercicio3: 200 + 56 - 189,
    ejercicio4: -665 - 1178 + 2280,
    ejercicio5: 20 - 15 + 40 - 75,
    ejercicio6: -67 + 72 - 16 + 2,
    ejercicio7: 220 - 78 - 81 - 93 + 41 - 59,
    ejercicio8: -45 - 66 - 79 + 200 - 10,
  };

  const [userResponse, setUserResponse] = useState({});
  const [response, setResponse] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setUserResponse({ ...userResponse, [id]: e.target.value });
    sendData((prevalue: string[]) => ({
      ...prevalue,
      [id]: "none",
    }));
    setResponse({
      ...response,
      [id]: "",
    });
  };

  const checkResponse = (id: string) => {
    const uResponse = userResponse[id] || "";
    const isTrue = +uResponse === correctAnswer[id];
    setResponse({
      ...response,
      [id]: isTrue ? "✅ Correcto" : "❌ Incorrecto",
    });
    sendData((prevalue: string[]) => ({
      ...prevalue,
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
    <div className="input_exercises">
      <input
        type="text"
        required
        value={userResponse[idAnswer] || ""}
        onChange={(e) => handleChange(e, idAnswer)}
        onKeyDown={handleKeyDown}
        className={styles.input_exercise}
      />
      <button
        className={styles.button_exercise}
        onClick={() => checkResponse(idAnswer)}
        disabled={disabledButton}
      >
        Responder
      </button>
      <p className={styles.p_result}>
        {response[idAnswer] ? response[idAnswer] : "   "}
      </p>
    </div>
  );
}
