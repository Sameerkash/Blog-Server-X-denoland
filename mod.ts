import { Application } from "./deps.ts";
import { getDB } from "./utils/db.ts";
import router from "./routes/routes.ts";
import { oakCors } from "./deps.ts";

getDB();

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
