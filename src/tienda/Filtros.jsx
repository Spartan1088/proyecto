import React from 'react';

const Filtros = ({ onFiltrarPorMarca, onFiltrarPorCategoria }) => (
  <div className="filtros">
    <button onClick={() => onFiltrarPorMarca('Dell')}>Dell</button>
    <button onClick={() => onFiltrarPorMarca('HP')}>HP</button>
    <button onClick={() => onFiltrarPorCategoria('laptop')}>Laptop</button>
    <button onClick={() => onFiltrarPorCategoria('tablet')}>Tablet</button>
    <button onClick={() => {
      onFiltrarPorMarca('');
      onFiltrarPorCategoria('');
    }}>
      Todos
    </button>
  </div>
);

export default Filtros;
