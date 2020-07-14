import { Router } from "../deps.ts";
import * as userContorller from "../controller/user_controller.ts";
import { RouterContext } from "../deps.ts";
import * as postController from "../controller/post_controller.ts";

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = { message: "Welcome to deno" };
});

router.get("/user/users", userContorller.getUsers);

router.post("/user/create", userContorller.createUser);

router.post("/user/signup", userContorller.signUp);

router.delete("/user/delete", userContorller.deleteUser);

router.patch("/user/update", userContorller.updateUser);

router.get("/post/posts", postController.allPosts);

router.post("/post/create", postController.createPost);

router.patch("/post/update", postController.updatePost);

router.delete("/post/delete", postController.deletePost);

export default router;
