const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

// Serve static files from the public directory
app.use(express.static(path.join(__dirname)))

console.log(__dirname)
// Route handler for the root URL
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/view/index.html'))
})



app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}/`)
})