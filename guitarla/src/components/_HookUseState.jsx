import { useState } from "react"

export default function _HookUseState() {

    const [customer, setCustomer] = useState({}) // su valor inicial va a ser un objeto vacio
    // useState siempre va a retornarnos un arreglo (estamos aplicando arrayDestructuring)
    // estoy nombrando mi state commo "customer" y tambien estamos utilizando "setCustomer"
    // este "set" es una convencion que existe en react
    // "customer" es el state, "setCustomer" es la funcion que modifica el state
    // siempre vamos a utilizar la funcion "setCustomer" cada vez que querramos realizar cambios en el state "customer"

    const [total, setTotal] = useState(0) // su valor inicial va a ser cero
    // "total" es el state, "setTotal" es la funcion que modifica el state
    // siempre vamos a utilizar la funcion "setTotal" cada vez que querramos realizar cambios en el state "total"

    const [products, setProducts] = useState([]) // su valor inicial va a ser un arreglo vacio
    // "products" es el state, "setProducts" es la funcion que modifica el state
    // siempre vamos a utilizar la funcion "setProducts" cada vez que querramos realizar cambios en el state "products"
    
    const [modal, setModal] = useState(false) // su valor inicial va a ser el bool false
    // "modal" es el state, "setModal" es la funcion que modifica el state
    // siempre vamos a utilizar la funcion "setModal" cada vez que querramos realizar cambios en el state "modal"
    
    return ( 
        <h1>Hola mundo</h1>
    )
}