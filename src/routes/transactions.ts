import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { knex } from '../database'

import { z } from 'zod'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactioBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credits', 'debit']),
    })

    const { title, amount, type } = createTransactioBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })
    return reply.status(201).send()
  })
}
