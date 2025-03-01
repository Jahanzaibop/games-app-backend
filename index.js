import express from 'express'
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import gameRoute from './routes/gameRoute.js'

const app = express();

app.use(cookieParser())
app.use(cors({
    origin: 'https://game-app-frontend-t6tk.vercel.app', // Change this to your front-end URL
    credentials: true // Allow credentials (cookies)
}));
app.use(express.json());

dotenv.config();

app.get('/' , (req,res) =>{
    res.json('This is coming from backend')
})

app.use('/api/v1/gameusers' , userRoute);

app.use('/api/v1/games' , gameRoute);



app.listen(process.env.PORT , ()=>{
   connectDB()
    console.log("Connected to the backend")
})
