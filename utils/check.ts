import { RouterContext } from "../deps.ts";

export function checkBool(value: any, ctx: RouterContext, messgae: string) {
  if (value) {
    ctx.response.body = { message: `${messgae}` };
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      error: "something went wrong, Could not complete Opeartion",
    };
  }
}
