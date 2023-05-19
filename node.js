const mysql2 = require("mysql2/promise");

(async () => {
  const connection = await mysql2.createConnection(process.env.PLANETSCALE_URL);

  console.log("creating table...");
  await connection.execute("drop table if exists test");
  await connection.execute("create table test(id int)");
  console.log("hoorraaay, created table!");
  process.exit(0);
})();
