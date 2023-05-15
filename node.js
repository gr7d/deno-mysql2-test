const mysql2 = require("mysql2/promise");

(async () => {
  const connection = await mysql2.createConnection({
    host: "localhost",
    port: 3800,
    user: "user",
    password: "user_password",
    database: "database",
  });

  console.log("creating table");
  await connection.execute("create table test(id int)");
  console.log("hoorraaay!! created table");
})();
