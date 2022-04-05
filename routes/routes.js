const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {});
app.get("/client/:id", function (req, res) {});
app.post("/client", function (req, res) {});
app.put("/client/:id", function (req, res) {});
app.delete("/client/:id", function (req, res) {});
app.get("/clients/risk", function (req, res) {});

app.listen(":4000", () => console.log("api listening on port 4000"));
