import User from "../models/user.ts";
import { RouterContext } from "../deps.ts";
import { checkBool } from "../utils/check.ts";
import { getAuthToken } from "../utils/jwt.ts";
import { bcrypt } from "../deps.ts";

/// Gets all Users from the user collectoin
export async function getUsers(ctx: RouterContext) {
  const users = await User.all();

  ctx.response.status = 200;
  ctx.response.body = users;
}

export async function createUser(ctx: RouterContext) {
  const body: any = await ctx.request.body();
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
  const body: any = await ctx.request.body();
  if (body.value.email) {
    const user = await User.where("email", body.value.email).delete();
    checkBool(user, ctx, "successfully deleted");
  } else if (body.value.id) {
    const user = await User.where("_id", body.value.id).delete();
    checkBool(user, ctx, "successfully deleted");
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Wrong format" };
  }
}

export async function updateUser(ctx: RouterContext) {
  const body: any = await ctx.request.body();
  const user = await User.where("_id", body.value.id).update({
    name: body.value.name,
    email: body.value.email,
    password: body.value.password,
  });
  checkBool(user, ctx, "successfully updated");
}

export async function signUp(ctx: RouterContext) {
  const body: any = await ctx.request.body();

  const hashedPassword = await bcrypt.hash(body.value.password);

  const user = await User.create({
    name: body.value.name,
    email: body.value.email,
    password: hashedPassword,
  });

  const token = getAuthToken(user);

  if (user) {
    ctx.response.status = 200;
    ctx.response.body = {
      token: token,
      user: user,
    };
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Could not find user" };
  }
}

export async function signIn(ctx: RouterContext) {
  const body: any = await ctx.request.body();
  const user = await User.where("email", body.value.email).get();

  if (user) {
    const password = await bcrypt.compare(
      body.value.password,
      user[0].password
    );
    if (password) {
      console.log(password);
      const token = getAuthToken(user);
      ctx.response.status = 200;
      ctx.response.body = {
        token: token,
        user: user,
      };
    } else {
      ctx.response.status = 400;
      ctx.response.body = { error: "Invalid credentials" };
    }
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Could not find user" };
  }
}
