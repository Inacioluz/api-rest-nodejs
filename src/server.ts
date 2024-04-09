import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/ola', async () => {
  const transactions = await knex('transactions')
    .insert({
      Id: crypto.randomUUID(),
      title: 'Transação da tarde',
      amount: 520,
    })
    .returning('*')
  return transactions
})
app.get('/all', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
