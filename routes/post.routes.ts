import * as postController from "../controller/post_controller.ts";
import { Router } from "../deps.ts";
import { userGuard } from "../middleware/usergaurd.ts";

const postRoutes = new Router();

postRoutes.post("/post/posts", userGuard(), postController.allPosts);

postRoutes.post("/post/create", userGuard(), postController.createPost);

postRoutes.patch("/post/update", userGuard(), postController.updatePost);

postRoutes.delete("/post/delete", userGuard(), postController.deletePost);

export default postRoutes;
