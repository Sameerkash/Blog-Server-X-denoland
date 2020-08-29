import { Database } from "../deps.ts";
import User from "../models/user.ts";
import Post from "../models/post.ts";

const db = new Database("mongo", {
  uri: "mongodb://127.0.0.1:27017",
  database: "blog",
});

db.link([User, Post]);

await db.sync();

function getDB() {
  return db;
}

export { getDB };
