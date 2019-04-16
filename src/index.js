import express from "express";
import cors from "cors";

import users_routes from "./users/users_routes";
import auth_routes from "./auth/auth_routes";
import posts_routes from "./posts/posts_routes";

const PORT = process.env.PORT || 9001;
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use("/api/auth", auth_routes);
app.use("/api/posts", posts_routes);
app.use("/api/users", users_routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
