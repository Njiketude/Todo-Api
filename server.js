let express = require('express');
let app = express();
let PORT = process.env.PORT || 3001;
let todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    complete: false
}, {
    id: 2,
    description: 'Go to the market',
    complete: false
}, {
    id: 3,
    description: 'Feed the cart',
    complete: false
}
];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});
// Get /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

// Get /todos/:id
app.get('/todos/:id', function (req, res, id) {
    let todoId = parseInt(req.params.id,10);
    let matchedTodo;

    todos.forEach(function (todo) {
       if (todoId === todo.id){
           matchedTodo = todo;
       }
    });
    if (matchedTodo){
        res.send(matchedTodo);
    }else {
        res.status(404).send();
    }
});

app.listen(PORT, function () {
    console.log('Express listenin on port ' + PORT + '!');
});