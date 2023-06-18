import React, { FC } from 'react'

import Home from 'Screens/Home'
import { Route, Routes } from 'react-router-dom'

import './style/base.scss'
import './style/font/imports.scss'

const App: FC = () => {
    global.AngleToRadian = AndgleInDeg => (Math.PI / 180) * AndgleInDeg

    return (
        <>
            <MainContent />
        </>
    )
}

const MainContent: FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default App
