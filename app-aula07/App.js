import { View } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
export default function App() {
  return (
    <CarrinhoProvider>
      <ProdutosScreen />
    </CarrinhoProvider>
  );
}