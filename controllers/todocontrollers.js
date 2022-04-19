const Todo = require ("../models/todoModels")

const addTodo = async (req,res) => {
 const {title,  description} = req.body;
 const userId = req.userId
 const newTask = await new Todo({title,  description, "owner": userId})
 await newTask.save()
 res.send("Su tarea a sido guardada")
}

const updateTodo = async (req,res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Todo.findByIdAndUpdate(req.params.id, newTask); //le paso como parametro el id de la tarea original y newTask va a ser por el que la voy a actualizar
    res.json({status: 'Task Updated'});
}

const getTodo = async (req,res) => {
const task = await Todo.findById(req.params.id);
 res.send(task);

}

const getTodos = async (req,res) => {
    const userId = req.userId
     const task = await Todo.find({"owner" : userId})
     res.send(task);
}

const deleteTodo = async (req,res) => {
    await Todo.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'}); 
}

module.exports = {
    addTodo, updateTodo, getTodo, getTodos, deleteTodo
}