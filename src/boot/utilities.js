import { boot } from "quasar/wrappers";

const utils = {
  authenticated: false,
  api_backend: "http://127.0.0.1:8000/api/",
  exams: {
    exam1: {
      id: 1,
      title: "Examen de Python Basico",
      questions: [
        {
          question_id: 1,
          question: "¿ques siginifica str?",
          options: [
            { id: 0, quest: "string", correct: true },
            { id: 1, quest: "state transfer", correct: false },
            { id: 2, quest: "strong", correct: false },
          ],
        },
        {
          question_id: 2,
          question: "¿ques siginifica int?",
          options: [
            { id: 0, quest: "int", correct: true },
            { id: 1, quest: "interface", correct: false },
            {
              id: 2,
              quest: "igualador numerico transaccional",
              correct: false,
            },
          ],
        },
      ],
    },
    exam2: {
      id: 2,
      title: "Examen de Python Intermedio",
      questions: [
        {
          question_id: 1,
          question: "¿para que sirve la funcion split()?",
          options: [
            {
              id: 0,
              "para separar una cadena en varios elementos segun un valor": true,
            },
            { id: 1, quest: "para conertir string a numero", correct: false },
            { id: 2, quest: "ninguna de las anteriores", correct: false },
          ],
        },
      ],
    },
    exam3: {
      id: 3,
      title: "Examen de Python Avanzado",
      questions: [
        {
          question_id: 1,
          question: "¿?",
          options: [
            { id: 0, quest: "", correct: true },
            { id: 1, quest: "", correct: false },
            { id: 2, quest: "", correct: false },
          ],
        },
      ],
    },
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$utils = utils;
});
