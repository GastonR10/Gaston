// import
import React from 'react';
import './Greeting.css';

// funcion componente
function Greeting() {
    const text = 'Hola';
    return (
        <div className="container">
            <span>{text}</span>
        </div>        
    );
}

// exportar
export default Greeting;