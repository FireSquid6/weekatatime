import { Client } from "pg";

const databaseUrl = process.env.PGURL;

const pgClient = new Client({
  connectionString: databaseUrl,
  ssl: true,
});
await pgClient.connect();

export function getClient() {
  return pgClient;
}
