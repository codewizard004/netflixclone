const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require("dotenv");
const authRoute = require("./routes/auth");

env.config()

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log("DB Connected");
}).catch( (err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth",authRoute);

app.listen(8800, () => {
    console.log("Running PORT ");
});