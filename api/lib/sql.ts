import postgres from "postgres";

console.log(process.env.PGURL);
export const sql = postgres(process.env.PGURL);
