const express = require("express")
const request = require("request")


const PORT = process.env.PORT || 80
const HOST = process.env.HOST || "localhost"

const servers = [`http://${HOST}:3000`, `http://${HOST}:3001`, `http://${HOST}:3002`]
let cur = 0

const handler = (req, res) => {
	const _req = request({ url: servers[cur] + req.url}).on('error', error => {
		res.status(500).send(error.message)
	})
	req.pipe(_req).pipe(res)
	cur = (cur + 1) % servers.length
}
const server = express().get('*', handler).post('*', handler)

server.listen(PORT, () => console.log(`Balancer active on port ${PORT}`))
