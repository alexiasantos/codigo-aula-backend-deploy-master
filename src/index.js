require('dotenv').config()
const express = require('express')
const knex = require('knex')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	const carros = knex('carros')
	return res.json(carros)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})
