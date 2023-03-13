import { resolve } from 'path'

const BASE_DIR = resolve(__dirname, '../..')
const SRC_DIR = resolve(BASE_DIR, 'src')
const DIST_DIR = resolve(BASE_DIR, 'dist')

export { BASE_DIR, SRC_DIR, DIST_DIR, resolve }
