import { Application, Router, Context } from "./deps.ts";
import { getDB } from "./utils/db.ts";
// import router from "./routes/routes.ts";
import { oakCors } from "./deps.ts";
import { middlewares } from "./middleware/middlewares.ts";
import userRoutes from "./routes/routes.ts";
import postRoutes from "./routes/post.routes.ts";

getDB();

const app = new Application<Context>();


app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

app.use(oakCors());
app.use(middlewares.JWTAuthMiddleware);

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());
app.use(postRoutes.routes());
app.use(postRoutes.allowedMethods()); 


app.listen({ port: 3000 });

