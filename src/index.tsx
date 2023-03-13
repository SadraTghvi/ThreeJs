import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import App from 'App'
import { BrowserRouter as Router } from 'react-router-dom'

const Root: FC = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

const container = document.getElementById('root')!
createRoot(container).render(<Root />)
