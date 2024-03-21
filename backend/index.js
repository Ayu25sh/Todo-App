const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173"
}));

const routes = require("./routes");
app.use("/api/v1",routes);

require("./database").dbConnect();

app.listen(PORT, () => {
    console.log(`App is listening at port no ${PORT}`)
})

app.get("/", (req,res) => {
    return res.json({
        success:true,
        message:" this is a default route"

    })
})