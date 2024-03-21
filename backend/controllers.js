const { createTodo,updateTodo } = require("./types");
const Todo = require("./models/Todo");

//create
exports.createTodo = async(req,res) => {
    try{
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if(!parsedPayload.success){
            return res.status(411).json({
                success:false,
                msg : "You sent the wrong inputs"
            })
        }

        const createdTodo = await Todo.create({
                                            title:createPayload.title,
                                            description:createPayload.description,
                                            completed:false
                                        })
                                        
        return res.status(200).json({
            success: true,
            msg: "Todo created successfully",
            createdTodo,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: "Plz try again",
        })
    }
}

//get
exports.getTodo = async(req,res) => {
    try{

        const allTodo = await Todo.find({});
        
        if(!allTodo){
            return res.status(411).json({
                success:403,
                msg : "No todo is created"
            })
        }
        return res.status(200).json({
            success: true,
            msg: "Todos fetched successfully",
            allTodo,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: "Plz try again"
        })
    }
}


//update
exports.updateTodo = async(req,res) => {
    try{
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload);
        
        if(!parsedPayload.success){
            return res.status(411).json({
                success:true,
                msg : "You sent the wrong inputs"
            })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(updatePayload.id,{ completed : true})

        return res.status(200).json({
            success: true,
            msg: "Todos updated successfully",
            updatedTodo,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: "Todo is not update,Plz try again",
            error : error.message,
        })
    }
}
