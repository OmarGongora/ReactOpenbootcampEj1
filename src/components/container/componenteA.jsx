import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {
    const [estado,setEstado] = useState(true)

    const cambiarEstado = () =>{
        setEstado(!estado)
    }

    const contactoPrueba = new Contacto('omar','gongora','omar.gongora03@gmail.com',estado)



    return (
        <div>
            <ComponenteB contacto={ contactoPrueba }></ComponenteB>

            <button onClick={cambiarEstado}> { estado ? 'Desconectarse' : 'Conectarse' } </button>
        </div>
    );
};


ComponenteA.propTypes = {

};


export default ComponenteA;
