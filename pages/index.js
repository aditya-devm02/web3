import { OktoContextProvider } from '../context/OktoContext';
import Cart from '../components/Cart';
import Wallet from '../components/Wallet';

export default function Home() {
  return (
    <OktoContextProvider>
      <div>
        <h1>Web3 E-commerce</h1>
        <Wallet />
        <Cart />
      </div>
    </OktoContextProvider>
  );
} 