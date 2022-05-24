import ItemCount from '../ItemCount/ItemCount';
import InputCount from '../InputCount/InputCount';
import { useState } from 'react';

function Intercambiar(producto) {
    let productos = producto.children;
    const [count, setCount] = useState(true);

    // console.log(productos)

    function countModified() {
        setCount(false)
        console.log(count)
    }

    return(
        <>  
            {
                count === true ?
                    <ItemCount productos={productos} countModified={countModified}/>
                :
                    <InputCount />
            }
        </>
    )
}

export default Intercambiar