'use strict'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from './components/Game'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Game />
    </StrictMode>
)
