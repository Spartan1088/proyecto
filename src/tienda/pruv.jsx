import React, { useState } from 'react';

// Componente del carrito con barra de búsqueda emergente
const Carrito = ({ onSearch }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="carrito"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>🛒 Carrito</span>
      {hover && (
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={(e) => onSearch(e.target.value)}
        />
      )}
    </div>
  );
};

// Componente de producto
const Producto = ({ producto }) => (
  <div className="producto">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>Precio: ${producto.precio}</p>
  </div>
);

// Componente de lista de productos con filtro
const ListaProductos = ({ productos }) => {
  const [categoria, setCategoria] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (categoria ? producto.categoria === categoria : true)
  );

  return (
    <div className="lista-productos">
      <Carrito onSearch={setBusqueda} />
      <div className="filtros">
        <button onClick={() => setCategoria('')}>Todos</button>
        <button onClick={() => setCategoria('laptop')}>Laptops</button>
        <button onClick={() => setCategoria('periferico')}>Periféricos</button>
        <button onClick={() => setCategoria('accesorio')}>Accesorios</button>
      </div>
      <div className="productos">
        {productosFiltrados.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

// Datos de productos (pasarlos como props desde el archivo original)
const App = () => {
  const productos = [
    // Aquí iría el arreglo de productos que proporcionaste
  ];

  return <ListaProductos productos={productos} />;
};

export default App;
