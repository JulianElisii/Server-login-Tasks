const express = require("express");
//const { verifyToken } = require("../controllers/verify.controllers");
const router = express.Router();
const {getTodo, getTodos, updateTodo, deleteTodo, addTodo } = require ("../controllers/todocontrollers.js")

router.get("/", verifyToken, getTodos)
router.get("/:id", verifyToken, getTodo)
router.put("/:id", verifyToken, updateTodo)
router.delete("/:id", verifyToken, deleteTodo)
router.post("/", verifyToken, addTodo)



module.exports = router;