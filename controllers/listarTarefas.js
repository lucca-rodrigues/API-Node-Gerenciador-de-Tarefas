const uuidv4 = require('uuid');

let tarefas = [
    {id: '1', nome: 'Estudar React', concluida: true},
    {id: '2', nome: 'Estudar React Hooks', concluida: false},
    {id: '3', nome: 'Estudar React redux', concluida: false}
];


function listarTarefas(req, res){
    const tarefa = tarefas;
    if(tarefa.length === 0){
        res.status(404).json({error: 'Tarefa não encontrada'});
    }
    res.json(tarefa);
}

function listarTarefasId(req, res){
    const id = req.params.id;
    const tarefa = tarefas.filter(tarefa => tarefa.id === id);
    if(tarefa.length === 0){
        res.status(404).json({error: 'Tarefa não encontrada'});
    }
    res.json(tarefa[0]);
}

module.exports = {
    listarTarefas,
    listarTarefasId
}