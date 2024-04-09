// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tbales {
    transactions: {
      id: string
      titble: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
