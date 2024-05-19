// props es un objeto JS donde las claves y valores son lo que podamos pasar de un componente padre a un componente hijo
// aunque un componente hijo no reciba nada del padre, props existe igual, siendo un objeto vacio {}
export default function Guitar({guitar/* , cart, setCart */, addToCart}) {

    // // forma #1 de modificar un state (v68)
    // const handleClick = (guitar) => {
    //     setCart([...cart, guitar]);
    // }
    
    const { id, name, image, description, price } = guitar;

    return ( 
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    // onClick={ () => handleClick(guitar) } // forma #1 de modificar un state (v68)
                    // onClick={ () => setCart([...cart, guitar]) } // forma #2 de modificar un state (v68)
                    // onClick={ () => setCart(prevCart => [...prevCart, guitar]) } // forma #3 de modificar un state (v68)
                    onClick={() => addToCart(guitar)} // forma #4 de modificar un state (v69)
                >Agregar al Carrito</button>
            </div>
        </div> 
    )
}