require('colors');


const mostrarMenu = () =>{

    return new Promise( resolve =>{

        console.clear();
    
        console.log('====================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('=====================\n'.green);
    
        console.log(`${'1.'.green} Crear Tarea.`);
        console.log(`${'2.'.green} Listar tareas.`);
        console.log(`${'3.'.green} Listar tareas completados.`);
        console.log(`${'4.'.green} Listar tareas pendiente.`);
        console.log(`${'5.'.green} Completar tarea(s).`);
        console.log(`${'6.'.green} Borrar tarea.`);
        console.log(`${'0.'.green} Salir.\n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
    
        readLine.question('Seeleccione una opcion: ', (opt) =>{
             readLine.close();
             resolve(opt);
        });

    })


}

const pausa = () =>{

    return new Promise( resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output:process.stdout
        });
    
    
        readLine.question(`\nPresione ${'ENTER'.green} par continuar\n`, (opt) =>{
             readLine.close();
             resolve(opt);
        });
    })

}

module.exports = {
    mostrarMenu,
    pausa
}