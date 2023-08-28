console.log("SALAM");
import express  from "express";
import { MongoClient } from "mongodb";
import {User} from "./model/model.js"
import mongoose from "mongoose"; 
import dotenv from "dotenv";
import { router  } from "./routes/auth.js";


dotenv.config();
const app = express();
const port = 8080;
app.use(express.json());
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("conect mongodb");
    // console.log("conect mongodb");
})
app.use('/api',router)




app.listen(port,()=>{
    console.log("server bngaya");
})