import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import posts_routes from "./routes/posts_routes.mjs";

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use("/", posts_routes);

mongoose.connect("mongodb://localhost/test");
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
