import { app } from './app'

app
  .listen({
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log('listening on port 3333')
  })
