import fastify from "fastify";

const app = fastify();

app.get("/ola", () => {
  return "Ola Vida";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("listening on port 3773");
  });
