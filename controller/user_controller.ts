import User from "../models/user.ts";
import { RouterContext } from "../deps.ts";

export async function getUsers(ctx: RouterContext) {
  const users = await User.all();
  console.log(users);
  ctx.response.status = 200;
  ctx.response.body = users;
}

export async function createUser(ctx: RouterContext) {
  const body = await ctx.request.body();
  const user = await User.create({
    name: body.value.name,
    email: body.value.email,
    password: body.value.password,
  });
  if (user) {
    ctx.response.status = 200;
    ctx.response.body = user;
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Could not create user" };
  }
}

export async function deleteUser(ctx: RouterContext) {
  const body = await ctx.request.body();
  if (body.value.email) {
    await User.where("email", body.value.email).delete();
    ctx.response.body = { message: "successfully deleted" };
  } else if (body.value.id) {
    const user = await User.where("_id", body.value.id).delete();
    user
      ? (ctx.response.body = { message: "successfully deleted" })
      : {
          error: "something went wrong ",
        };
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Wrong format" };
  }
}
