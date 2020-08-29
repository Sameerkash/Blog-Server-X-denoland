import { Router } from "../deps.ts";
import * as userContorller from "../controller/user_controller.ts";
import { RouterContext } from "../deps.ts";
import { userGuard } from "../middleware/usergaurd.ts";

const userRoutes = new Router();

userRoutes.get("/", (ctx: RouterContext) => {
  ctx.response.body = { message: "Welcome to deno" };
});

userRoutes.get("/user/users", userGuard(), userContorller.getUsers);

userRoutes.post("/user/create", userContorller.createUser);

userRoutes.post("/user/signup", userContorller.signUp);

userRoutes.post("/user/signin", userContorller.signIn);

userRoutes.delete("/user/delete", userGuard(), userContorller.deleteUser);

userRoutes.patch("/user/update", userGuard(), userContorller.updateUser);

userRoutes.get("/user/profile", userGuard(), userContorller.profile);

export default userRoutes;
