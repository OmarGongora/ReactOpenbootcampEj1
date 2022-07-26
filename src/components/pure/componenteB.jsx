import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre } 
            </h2>
            <h2>
                Apellido: { contacto.apellido }
            </h2>
            <h3>
                { contacto.email }
            </h3>
            <h4>
                { contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }
            </h4>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
