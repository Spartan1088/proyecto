import React, { useState } from 'react';
import '../App.css';

function Buscador({ filtrarProductos }) {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleChange = (e) => {
    setTextoBusqueda(e.target.value);
    filtrarProductos(e.target.value);
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        className="buscador-input"
        placeholder="Buscar productos..."
        value={textoBusqueda}
        onChange={handleChange}
      />
    </div>
  );
}

export default Buscador;
