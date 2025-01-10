import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from Express");
});

app.get("/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
