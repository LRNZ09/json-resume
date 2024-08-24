import { render } from 'preact'
import App from './App'

import './body.css'
import './tailwind.css'

const root = document.getElementById('root')
if (root) {
	render(<App />, root)
}
