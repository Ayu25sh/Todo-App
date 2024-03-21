const express = require("express");
const router = express.Router();

const {createTodo  , getTodo ,updateTodo} = require("./controllers");

router.post("/create-todo",createTodo);

router.get("/get-todo",getTodo);

router.put("/update-todo",updateTodo);

module.exports = router