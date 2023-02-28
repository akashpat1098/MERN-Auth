const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require("./routes/auth");


const app = express()

connection()
// Middleware
app.use(cors())
app.use(express.json())

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

const port = process.env.PORT || 8080
app.listen(port, ()=>{console.log(`Server is listening at port ${port}`);})