const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const cors=require('cors')


const app=express()

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

//Connecting mongodb
const connectDB=require('./config/db')
//load env
dotenv.config({path:'./config/config.env'})
connectDB()

//connect routers
app.use('/',require('./Routers/index'))
app.listen(process.env.PORT)
