import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "lsp_be",
  user: "postgres",
  password: "lulushacktiv8",
});
export default async function handler(req, res) {
  await client.connect();

  const response = await client.query(`SELECT * from "Asesis"`, []);
  console.log(response.rows);
  let data = response.rows; // Hello world!
  await client.end();

  res.json(data);
}
