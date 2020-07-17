import { httpErrors } from "../deps.ts";
import { AuthUser } from "../type/auth_user.ts";
import { Context } from "../core/context.ts";

export const userGuard = () => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const user = ctx.user;
    console.log("usergaurd" + user?.id);
    if (!user) {
      throw new httpErrors.Unauthorized("Unauthorized user");
    }
    await next();
  };
};
