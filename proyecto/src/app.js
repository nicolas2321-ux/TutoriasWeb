import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser  from 'body-parser'
import userRoutes from "./routes/userRoutes";
import mongoose from "mongoose";
const app = express();


if(process.env.NODE_ENV === 'production'){
    app.set("port",4000)
    }else{
    app.set('port', 5001)
}

app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/users', userRoutes);

export default app;