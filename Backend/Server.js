const express = require("express")
require("dotenv").config()
const colors = require("colors")
const ConnectDB = require("./Config/DB_config")

const app = express()
const PORT = process.env.PORT || 5000

// DB Connection
ConnectDB()

// Body Parcer
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Root
app.get("/", (req,res)=>{
    res.json({
        message: "Welcome to Blog API"
    })
})


// Blog routes
app.use("/api/blog", require("./Routes/BlogRoutes"))

// Server
app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`.blue)
})