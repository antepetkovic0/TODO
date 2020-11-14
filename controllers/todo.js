const todoService = require('../services/todo');

module.exports = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await todoService.getAllTodos();
            return res.status(200).json({status: 200, data: todos});
        } catch (e) {
            return res.status(400).json({status: 400, message: e.message})
        }
    },    
    getTodo: async (req, res) => {
        try {
            const id = req.params.id;
            const todo = await todoService.getTodo(id);
            return res.status(200).json({status: 200, data: todo});
        } catch (e) {
            return res.status(400).json({status: 400, message: e.message})
        }
    },
    addTodo: async (req, res) => {
        try {
            const { title, completed, description } = req.body;
            const todo = await todoService.addTodo(title, completed, description);
            return res.status(200).json({status: 200, data: todo});
        } catch (e) {
            return res.status(400).json({status: 400, message: e.message})
        }
    }
}

// router.get('/', async (req, res) => {
//     const todos = await Todo.findAll();
//     res.send(todos);
// });

// router.get('/:id', async (req, res) => {
//     const todo = await Todo.findAll({
//         where: {
//             id: req.params.id
//         }
//     });
//     res.send(todo);
// });

// router.post('/add', async (req, res) => {
//     const newTodo = await Todo.create({
//         title: req.body.title,
//         completed: req.body.completed,
//         description: req.body.description
//     });
//     res.send(newTodo);
// });

// router.put('/edit/:id', async (req, res) => {
//     await Todo.update({ title: 'GITHUB' }, {
//         where: {
//             id: req.params.id
//         }
//     });
//     res.send('Todo successfully updated.');
// });

// router.delete('/delete/:id', async (req, res) => {
//     await Todo.destroy({
//         where: {
//             id: req.params.id
//         }
//     });
//     res.send('Todo successfully deleted.');
// })

// module.exports = router;

