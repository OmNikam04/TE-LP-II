import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import songsRoutes from './route.js'
const app = express()
const PORT = 4000 || process.env.PORT

try {
    await mongoose.connect("mongodb://localhost:27017/music");
    console.log("Connected to MongoDB");
} catch (error) {
    console.error('Error during MongoDB connection:', error.message);
}


app.use(cors())
app.use(express.json())
app.use('/api', songsRoutes)

app.listen(PORT, ()=>console.log(`Server listening on http://localhost:${PORT}/`))



