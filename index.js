const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarTarefas, listarTarefasId } = require('./controllers/listarTarefas.js')

const app = express();
const port = 3333;

// // List
app.get('/tarefas', listarTarefas);
// List ID
app.get('/tarefas/:id', listarTarefasId);
// Create
// app.post('/tarefa/:id', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });
// // Update
// app.put('/tarefas/:id', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });
// // Delete ID
// app.delete('/tarefas/:id', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });
// // Conclude
// app.put('/tarefas/:id/concluir', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });

app.listen(port, ()=> console.log(`servidor funcionando na porta ${port}`));
