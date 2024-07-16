import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.use(express)

app.listen(port, () => {
    console.log(`Server rodando no enderesso http:/localhost:${port}`)
})