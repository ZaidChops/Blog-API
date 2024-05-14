const mongoose = require("mongoose")

const ConnectDB = async ()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connection successfull : ${conn.connection.host}`.green)
    } catch (error) {
        console.log(`Something went wrong ${error.message}`.red)
    }
}

module.exports = ConnectDB