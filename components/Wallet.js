import { useState } from 'react';

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet", error);
      }
    } else {
      alert('Please install a Web3 wallet like MetaMask');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && <p>Connected: {walletAddress}</p>}
    </div>
  );
};

export default Wallet; 