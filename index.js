const express = require('express');
const server = express();
server.use(express.json());


const tarefas = [
    {
        id: 1,
        descricao: 'comprar pao',
        finalizado: false
    },
    {
        id: 2,
        descricao: 'comprar leite',
        finalizado: true
    }
];

server.get('/tarefa', function(require,response){
    return response.json(tarefas);
});

server.listen(process.env.PORT || 3000);