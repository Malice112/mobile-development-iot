import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  function remover(index) {
    setCarrinho(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);