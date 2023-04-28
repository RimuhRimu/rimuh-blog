import fs from 'fs'
import path from 'path'

export const getData = (name) =>
	JSON.parse(fs.readFileSync(path.join(process.cwd(), `data/${name}.json`)))
