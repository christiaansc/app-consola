import "colors";
import inquirer from "inquirer";
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?.",
    choices: [
      {
        value: "1",
        name: `${"1".green}. Crear tarea.`,
      },
      {
        value: "2",
        name: `${"2".green}. Listar tarea(s).`,
      },
      {
        value: "3",
        name: `${"3".green}. Listar tarea(s) completadas.`,
      },
      {
        value: "4",
        name: `${"4".green}. Listar tarea(s) pendientes.`,
      },
      {
        value: "5",
        name: `${"5".green}. Completar tarea(s).`,
      },
      {
        value: "6",
        name: `${"6".green}. Eliminar tarea(s).`,
      },
      {
        value: "0",
        name: `${"0".green}. Salir.`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const pregunta = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"Enter".green} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(pregunta);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareaBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });
  choices.unshift({
    value: '0',
    name: "0.".green + " cancelar",
  });

  const pregunta = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked:(tarea.completadoEn) ? true : false
    };
  });
  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(pregunta);
  return ids;
};

const confirmar = async (message) => {
  const pregunta = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(pregunta);

  return ok;
};

export { inquirerMenu, pausa, leerInput, listadoTareaBorrar, confirmar ,mostrarListadoCheckList};
