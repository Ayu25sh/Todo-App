const mongoose = require("mongoose");
const { boolean } = require("zod");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    completed: {
        type:Boolean,
    }
})

module.exports = mongoose.model("Todo",todoSchema);