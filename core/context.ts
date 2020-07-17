import { Context as OakContext } from "../deps.ts";
import { AuthUser } from "../type/auth_user.ts";

export class Context extends OakContext {
  user?: AuthUser;
}
