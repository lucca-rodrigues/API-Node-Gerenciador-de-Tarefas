const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarTarefas, listarTarefasId, cadastrarTarefa, atualizarTarefa } = require('./controllers/listarTarefas.js')

const app = express();
const port = 3333;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// List
app.get('/tarefas', listarTarefas);
// List ID
app.get('/tarefas/:id', listarTarefasId);
// Create
app.post('/tarefas', cadastrarTarefa);
// // Update
app.put('/tarefas/:id', atualizarTarefa);
// // Delete ID
// app.delete('/tarefas/:id', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });
// // Conclude
// app.put('/tarefas/:id/concluir', (req, res) => {
//     res.status(501).json({error: 'Não implementado'})
// });

app.listen(port, () => console.log(`servidor funcionando na porta ${port}`));
