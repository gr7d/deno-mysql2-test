const mysql2 = require("mysql2/promise");

(async () => {
  const connection = await mysql2.createConnection({
    user: "root",
    password: "root",
    database: "database",
  });

  console.log("creating table...");
  await connection.execute("create table if not exists test(id int)");
  console.log("hoorraaay, created table!");
  process.exit(0);
})();
