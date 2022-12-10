import "colors";

import {
  inquirerMenu,
  leerInput,
  pausa,
  listadoTareaBorrar,
  confirmar,
  mostrarListadoCheckList
} from "./helpers/inquirer.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";
import { default as Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        // crear opcion
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        tareas.listarTareasCompletadas(true);
        break;

      case "4":
        tareas.listarTareasCompletadas(false);

        break;

        case '5':
           const ids = await mostrarListadoCheckList(tareas.listadoArr);
           tareas.toogleCompletadas(ids);
           console.log(ids);
          break;
      case "6":
        const id = await listadoTareaBorrar(tareas.listadoArr);

        if (id !== "0") {
          const ok = await confirmar("Estas suguro?");

          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }

      
        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
