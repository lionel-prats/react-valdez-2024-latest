// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db'

function App() {

    // data = array de objetos en /src/data/db.js
    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]); // v68
    

    // const array1 = [5, 12, 8, 130, 44];
    // const isLargeNumber = (element) => element == 44;
    // console.log(array1.findIndex(isLargeNumber));
    
    function addToCart(item) { // v69
        const itemExists = cart.findIndex(element => element.id === item.id)
        if(itemExists === -1) {
            item.quantity = 1;
            // setCart(prevCart => [...prevCart, item]);
            setCart([...cart, item])
        } else {
            // const updatedCart = cart;
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        }
    }

    return (
    <>
        <Header 
            cart={cart}
        /> 
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar
                        // en una iteracion en la que pasamos props siempre debemos pasar el prop especial "key" con un valor unico (siempre es buena idea pasar los id cuando existen) (v66)
                        key={guitar.id}
                        guitar={guitar}
                        // name={guitar.name}
                        // cart={cart} // v68
                        // setCart={setCart} // v68
                        addToCart={addToCart} // v69
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
