import React, { createContext, useState, useContext, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

const CarritoProvider = ({ children }) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
  }, [productosEnCarrito]);

  const agregarProducto = (producto) => {
    const productoExistente = productosEnCarrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      setProductosEnCarrito(
        productosEnCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setProductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: 1 }]);
    }
  };

  const quitarProducto = (id) => {
    const producto = productosEnCarrito.find((p) => p.id === id);
    if (producto?.cantidad > 1) {
      setProductosEnCarrito(
        productosEnCarrito.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
      );
    } else {
      setProductosEnCarrito(productosEnCarrito.filter((p) => p.id !== id));
    }
  };

  const vaciarCarrito = () => setProductosEnCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ productosEnCarrito, agregarProducto, quitarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
