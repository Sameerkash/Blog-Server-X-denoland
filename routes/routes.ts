import { Router } from "../deps.ts";
import {
  getUsers,
  createUser,
  deleteUser,
} from "../controller/user_controller.ts";
import { RouterContext } from "../deps.ts";

const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = { message: "Welcome to deno" };
});

router.get("/users", getUsers);

router.post("/createUser", createUser);

router.delete("/deleteUser", deleteUser);

router.get("/posts");

export default router;
