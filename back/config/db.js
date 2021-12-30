const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connection sucessfull")
    } catch (error) {
        console.log("db connection fail")
        process.exit(1)
    }
}
module.exports = connectDb