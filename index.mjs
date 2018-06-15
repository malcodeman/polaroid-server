import express from "express";
import cors from "cors";

import users_routes from "./users/users_routes.mjs";
import auth_routes from "./auth/auth_routes.mjs";
import posts_routes from "./posts/posts_routes.mjs";
import comments_routes from "./comments/comments_routes.mjs";
import likes_routes from "./likes/likes_routes.mjs";

const PORT = process.env.PORT || 9001;
const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use("/api/v1/users", users_routes);
app.use("/api/v1/auth", auth_routes);
app.use("/api/v1/posts", posts_routes);
app.use("/api/v1/comments", comments_routes);
app.use("/api/v1/likes", likes_routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
