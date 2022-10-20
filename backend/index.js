import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';



const app = express()
const port = 3001;
dotenv.config()
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

mongoose.connection.on('connected',()=>{
    console.log("Connected to database");
})
mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from database");
})

const connect=async()=>{
    try{
        await mongoose.connect(process.env.DB);
        console.log("connected to mongo")
    }catch(error){
        throw error;
    }
    
};


app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`)
  });