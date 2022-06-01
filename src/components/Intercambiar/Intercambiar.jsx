import ItemCount from '../ItemCount/ItemCount';
import InputCount from '../InputCount/InputCount';
import { useState } from 'react';

function Intercambiar({productos}) {
    const [count, setCount] = useState(true);

    function countModified() {
        setCount(false)
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