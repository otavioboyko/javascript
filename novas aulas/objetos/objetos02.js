const tarefas = [
    {
        id: 1,
        description: 'escovar os dentes',
        completed: true
    },
    {
        id: 2,
        description: 'estudar',
        completed: true
    },
    {
        id: 3,
        description: 'dormir',
        completed: false
    },
]

const description3 = tarefas[2].description

console.log(description3)

const tarefasJSON = JSON.stringify(tarefas)
const tarefasLista = JSON.parse(tarefasJSON)

console.log(tarefasLista)