import React, { useState } from 'react';
import './App.css';
import productos from '../public/Prductos.json';
import CarritoProvider from './contex/CarritoContext';
import Carrito from './tienda/Carrito';
import Filtros from './tienda/Filtros';
import Productos from './tienda/Productos';
import Modal from './assets/Modal';
import Buscador from './tienda/Buscador';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProductoSeleccionado(null);
  };

  const productosFiltrados = productos.filter((p) => {
    const coincideMarca = filtroMarca ? p.marca === filtroMarca : true;
    const coincideCategoria = filtroCategoria ? p.categoria === filtroCategoria : true;
    const coincideBusqueda = p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());
    return coincideMarca && coincideCategoria && coincideBusqueda;
  });

  return (
    <CarritoProvider>
      <div id="app">
        <header>
          <h1>Mi Tienda</h1>
          <Buscador filtrarProductos={setTextoBusqueda} />
          <Carrito />
        </header>

        <Filtros
          onFiltrarPorMarca={setFiltroMarca}
          onFiltrarPorCategoria={setFiltroCategoria}
        />

        <Productos productos={productosFiltrados} onAbrirModal={abrirModal} />

        {modalOpen && (
          <Modal producto={productoSeleccionado} onCerrar={cerrarModal} />
        )}
      </div>
    </CarritoProvider>
  );
};

export default App;
