const zod = require("zod");

exports.createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

exports.updateTodo = zod.object({
    id : zod.string(),
})

