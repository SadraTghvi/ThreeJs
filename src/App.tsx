import React, { FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from 'Screens/Home'

import './style/base.scss'
import './style/font/imports.scss'

const App: FC = () => {
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
