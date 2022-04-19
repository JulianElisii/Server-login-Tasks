const express =require ("express");
const app = express();
const helmet = require ("helmet");
const cors = require ("cors");
const morgan = require ("morgan");
const bodyParser = require ("body-parser");


//DB connection 
const {mongoose} = require ("./database.js")


//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//routes
app.use("/" , require("./routes/auth.todo"));
app.use("/todo", require("./routes/todo.route"))

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });


module.exports = app;
