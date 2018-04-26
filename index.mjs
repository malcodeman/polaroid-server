import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.send("Test");
});

app.listen(9000, () => console.log(`Running on port 9000`));
