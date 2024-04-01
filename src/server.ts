import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/ola", async () => {
  const transactions = await knex("transactions").insert({
    Id: crypto.randomUUID(),
    title: "Transação da tarde",
    amount: 520,
  });
  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("listening on port 3333");
  });
