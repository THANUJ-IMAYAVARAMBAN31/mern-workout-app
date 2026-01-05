const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const workoutroutes = require('./routes/workout')

const app = express()
app.use(express.json())
const PORT = process.env.PORT

app.use((req,res,next)=>{ 
    console.log(req.method, req.path)
    next()
})

app.get('/',(req,res)=>{
    res.json({msg : 'Hello from Express server!'})
})

app.use('/api/workouts/', workoutroutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
   app.listen(PORT,()=>{
    console.log('Connected to MongoDB');
    console.log(`Server is running on port http://localhost:${PORT}`);
})
}).catch((error)=>{
    console.log('Error connecting to MongoDB:', error);
})

