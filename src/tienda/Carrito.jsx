import React, { useState, useRef, useEffect } from 'react';
import { useCarrito } from '../contex/CarritoContext';

const Carrito = () => {
  const { productosEnCarrito, quitarProducto, vaciarCarrito } = useCarrito();
  const [abierto, setAbierto] = useState(false);
  const carritoRef = useRef(null);

  const handleMouseEnter = () => setAbierto(true);
  const handleMouseLeave = () => setAbierto(false);

  // Cerrar el carrito si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (carritoRef.current && !carritoRef.current.contains(e.target)) {
        setAbierto(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Calcular el total de precios en el carrito
  const totalPrecio = productosEnCarrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div
      className="carrito-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="carrito-toggle">
        Carrito ({productosEnCarrito.reduce((acc, p) => acc + p.cantidad, 0)})
      </button>
      {abierto && (
        <div className="carrito" ref={carritoRef}>
          {productosEnCarrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productosEnCarrito.map((producto) => (
                    <tr key={producto.id}>
                      <td>
                        <img src={producto.imagen} alt={producto.nombre} />
                        {producto.nombre}
                      </td>
                      <td>{producto.cantidad}</td>
                      <td>
                        <button onClick={() => quitarProducto(producto.id)}>-</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p><strong>Total: ${totalPrecio.toFixed(2)}</strong></p>
            </div>
          )}
          <button className="vaciar-carrito" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
