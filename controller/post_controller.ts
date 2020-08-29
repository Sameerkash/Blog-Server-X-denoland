import Post from "../models/post.ts";
import { RouterContext } from "../deps.ts";
import { checkBool } from "../utils/check.ts";
import { userGuard } from "../middleware/usergaurd.ts";

export const allPosts = async (ctx: RouterContext) => {
  const body = await ctx.request.body();
  
  let posts: [];

  if (body.value.skip) {
    posts = await Post.skip(body.value.skip).take(body.value.take).get();
  } else {
    posts = await Post.take(body.value.take).get();
  }

  if (posts) {
    ctx.response.body = posts;
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Something went wrong " };
  }
};

export async function createPost(ctx: RouterContext) {
  const body: any = await ctx.request.body();
  const post = await Post.create({
    title: body.value.title,
    content: body.value.content,
    published: body.value.published,
  });
  if (post) {
    ctx.response.body = post;
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Something went wrong " };
  }
}

export async function updatePost(ctx: RouterContext) {
  const body: any = await ctx.request.body();
  const post = await Post.where("_id", body.value.id).update({
    title: body.value.title,
    content: body.value.content,
    published: body.value.published,
  });
  checkBool(post, ctx, "Updates Successfully");
}

export async function deletePost(ctx: RouterContext) {
  const body: any = await ctx.request.body();
  const post = await Post.where("_id", body.value.id).delete();
  checkBool(post, ctx, "Deleted Successfully");
}
