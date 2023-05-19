import mysql2 from "npm:mysql2/promise";

setTimeout(() => {
  console.log("took longer than 10 seconds, exiting");
  Deno.exit(1);
}, 10e3);

const connection = await mysql2.createConnection(
  Deno.env.get("PLANETSCALE_URL")!
);

console.log("creating table...");
await connection.execute("drop table if exists test");
await connection.execute("create table test(id int)");
console.log("hoorraaay, created table!");
Deno.exit(0);
