import express from 'express';

const PORT = 8080;
const app = express();

app.get('/', (_, res) => {
  res.send('Hello from the docker container!')
})

app.listen(PORT, () => {
  console.log(`listening to ${PORT} ...`)
})
