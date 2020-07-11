import { Application } from "./deps.ts";
import router from "./routes/routes.ts";
import { connectSyncDb, getDB } from "./utils/db.ts";

getDB();

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });
