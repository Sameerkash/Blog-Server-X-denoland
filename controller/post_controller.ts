import Post from "../models/post.ts";
import { RouterContext } from "../deps.ts";

export async function allPosts(ctx: RouterContext) {
  const posts = await Post.all();
  if (posts) {
    ctx.response.body = posts;
  } else {
    ctx.response.status = 400;
    ctx.response.body = { error: "Something went wrong " };
  }
}

export async function createPost(ctx: RouterContext) {
  const body = await ctx.request.body();
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
