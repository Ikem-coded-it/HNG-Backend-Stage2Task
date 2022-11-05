const express = require("express");
const app = express();
const operationRouter = require("./routes/operation.route");

app.use(express.json());

app.use("/operation", operationRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})