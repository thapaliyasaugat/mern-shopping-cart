const express = require("express")
const dotenv = require("dotenv")
const productRoutes = require("./routes/productRoutes");
const connectDb = require("./config/db")
const app = express()
dotenv.config()
connectDb()
app.use(express.json())
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})