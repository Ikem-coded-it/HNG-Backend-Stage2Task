const express = require("express");
const app = express();
const operationRouter = require("./routes/operation.route");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")

app.use(express.json());
app.use(cors());

app.use("/operation", operationRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})