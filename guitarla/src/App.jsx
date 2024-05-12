// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'

function App() {

    const [auth, setAuth] = useState(false)
    return (
    <>
        <Header /> 
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
                <Guitar />
            </div>
        </main>
        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
    </>
  )
}

export default App