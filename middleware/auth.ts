import { getJwtPayload } from "../utils/jwt.ts";
import { Context } from "../deps.ts";
import { AuthUser } from "../type/auth_user.ts";

const JwtAuthMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  try {
    const authHeader = ctx.request.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace(/^bearer/i, "").trim();
      const user = await getJwtPayload(token);

      if (user) {
        ctx.response.body = user as AuthUser;
      }
    }
  } catch (err) {}

  await next();
};
export { JwtAuthMiddleware };
