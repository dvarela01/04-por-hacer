const argv = require('yargs').command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'Listar las tareas por hacer')
    .command('borrar', 'borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Elimina una tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}