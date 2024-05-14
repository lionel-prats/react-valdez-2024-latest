import { useState, useEffect } from "react"

export default function _HookUseEffect() {
    const [auth, setAuth] = useState(false)
    useEffect( () => {
        if(auth) {
            console.log("autenticado");
        }
    }, [auth])
    setTimeout(() => {
        setAuth(true)
    }, 3000);
    return ( 
        <h1>Hola mundo</h1>
    )
}