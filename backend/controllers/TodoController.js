const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async (req, res) => {
    console.log("req.body", req.body)
    const { text } = req.body

    TodoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })

}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body
    TodoModel
        .findOneAndUpdate({ _id: _id }, { text: text })
        .then(() => res.status(201).send("Update Successfully..."))
        .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body
    TodoModel
        .findOneAndDelete({ _id: _id })
        .then(() => res.status(201).send("Delete Successfully..."))
        .catch((err) => console.log(err))
}



// const deleteToDo = (_id, setToDo) => {
//     axios
//       .delete(`${baseUrl}/delete`, { data: { _id } })
//       .then((response) => {
//         console.log("Delete API call successful");
//         getAllToDo(setToDo);
//       })
//       .catch((error) => {
//         console.error('Error deleting todo:', error);
//       });
//   };