import React from 'react';
import { useCarrito } from '../contex/CarritoContext';
import '../App.css';

const Productos = ({ productos, onAbrirModal }) => {
  const { agregarProducto } = useCarrito();

  return (
    <div className="productos">
      {productos.map((producto) => (
        <div className="producto-card" key={producto.id}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="producto-imagen"
          />
          <h3 className="producto-nombre">{producto.nombre}</h3>
          <p className="producto-marca">{producto.marca}</p>
          <p className="producto-precio">${producto.precio}</p>
          <button
            className="btn-detalle"
            onClick={() => onAbrirModal(producto)}
          >
            Ver Detalle
          </button>
          <button
            className="btn-detalle"
            onClick={() => agregarProducto(producto)}
          >
            Agregar al Carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
