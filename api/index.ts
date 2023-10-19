import Bao from "baojs";
import chalk from "chalk";
import { sql } from "./lib/sql";

const app = new Bao();
const port = parseInt(process.env.PORT) || 3000;

app.get("/", (ctx) => {
  return ctx.sendText("Hello world!");
});

console.log(chalk.green(`🚀 Server started on port ${port}`));

await sql`INSERT INTO weather (city) VALUES ('New York')`;

app.listen({
  port: port,
});
