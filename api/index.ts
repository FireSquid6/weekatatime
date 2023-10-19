import Bao from "baojs";
import chalk from "chalk";
import { getClient } from "./lib/sql.ts";

const app = new Bao();
const port = parseInt(process.env.PORT) || 3000;
const pgClient = getClient();

app.get("/", (ctx) => {
  return ctx.sendText("Hello world!");
});

console.log(chalk.green(`🚀 Server started on port ${port}`));
const result = await pgClient.query(
  "INSERT INTO weather (city) VALUES ('dallas')",
);
console.log(result.rows);

app.listen({
  port: port,
});
