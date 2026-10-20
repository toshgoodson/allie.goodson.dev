// Serves the exported site the way GitHub Pages does (/about → about.html,
// unknown paths → 404.html), for checking `out/` locally:  yarn serve
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const root = process.argv[2] ?? 'out'
const port = Number(process.argv[3] ?? 8085)
const types = {
	'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
	'.txt': 'text/plain', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp', '.jpg': 'image/jpeg',
	'.png': 'image/png', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
}
const isFile = p => stat(p).then(s => s.isFile(), () => false)

createServer(async (req, res) => {
	const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '')
	const base = join(root, path)
	for (const p of [base, base + '.html', join(base, 'index.html')]) {
		if (await isFile(p)) {
			const body = await readFile(p)
			res.writeHead(200, { 'content-type': types[extname(p)] ?? 'application/octet-stream' })
			return res.end(body)
		}
	}
	res.writeHead(404, { 'content-type': types['.html'] })
	res.end(await readFile(join(root, '404.html')).catch(() => 'Not found'))
}).listen(port, () => console.log(`Serving ${root}/ at http://localhost:${port}`))
