const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Server is alive");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Server active. Listening to ${PORT}`);