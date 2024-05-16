// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'

function App() {

    // data = array de objetos en /src/data/db.js
    const [data, setData] = useState(db)
    
    return (
    <>
        <Header /> 
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar
                        // en una iteracion en la que pasamos props siempre debemos pasar el prop especial "key" con un valor unico (v66)
                        key={guitar.id}
                        guitar={guitar}
                        // name={guitar.name}
                    />
                ))}
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
