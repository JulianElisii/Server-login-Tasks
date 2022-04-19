const {Schema , model} = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    owner:{
        type: String
    }
})

module.exports = model('Todo' , todoSchema);