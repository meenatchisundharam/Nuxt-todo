import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
// get
app.get("/api/status",(req,res)=>{
    console.log(req);
    return res.json({
        sucess:"true",
        message:"server is running good"
    });
});


app.listen(5000, () =>{
    console.log("server is running port 5000");
});