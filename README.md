## Blog Server x DenoLand 

#### A blog which facilitates a service like Medium.com. Buit with deno and TypeScript. 

**Dependencies**

* Oak - A middleware framewrok for deno 
* Dennodb - An ORM for deno which supports MySQL, PostgreSQL, MariaDB, MongoDb and SQLite
* MongoDB - A NoSQL database 

**Checklist**

- [x] Basic CRUD Operations for User model
- [x] Basic CRUD operations for Post model
- [x] Authentication with djwt 
- [ ] Validation objects
- [ ] Integrate Auth middleware and secure routes
- [ ] Media Uplaod support 
- [ ] Pagination 
- [ ] Search and sorting 
- [ ] Optimized Feed per user.


Install denon globally

**To start the server** 

`denon dev` or `deno  run --allow-net --allow-read --unstable --allow-write --allow-plugin  mod.ts`

**To cache dependencies**

`denon cache` or `deno run deps.ts` 





