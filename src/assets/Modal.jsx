import React from 'react';

const Modal = ({ producto, onCerrar }) => (
  <>
    <div className="modal-overlay" onClick={onCerrar}></div>
    <div className="modal">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Marca: {producto.marca}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <h3>Características:</h3>
      <ul>
        {Object.entries(producto.caracteristicas).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      <button className="btn-cerrar" onClick={onCerrar}>Cerrar</button>
    </div>
  </>
);

export default Modal;
