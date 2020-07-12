import { Router } from "../deps.ts";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user_controller.ts";
import { RouterContext } from "../deps.ts";
import { allPosts, createPost } from "../controller/post_controller.ts";

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = { message: "Welcome to deno" };
});

router.get("/users", getUsers);

router.post("/createUser", createUser);

router.delete("/deleteUser", deleteUser);

router.patch("/updateUser", updateUser);

router.get("/posts", allPosts);

router.get("/createPost", createPost);

export default router;
