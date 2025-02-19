import { createContext, useContext } from 'react';
import { OktoProvider } from '@okto_web3/react-sdk';

const OktoContext = createContext();

export const OktoContextProvider = ({ children }) => {
  const clientPrivateKey = process.env.NEXT_PUBLIC_CLIENT_PRIVATE_KEY;
  const clientSwa = process.env.NEXT_PUBLIC_CLIENT_SWA;
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  console.log('Client Private Key:', clientPrivateKey);
  console.log('Client SWA:', clientSwa);
  console.log('Environment:', environment);

  if (!clientPrivateKey || !clientSwa) {
    console.error("Missing Okto configuration");
    return null;
  }

  const config = {
    clientPrivateKey,
    clientSwa,
    environment,
  };

  return (
    <OktoProvider config={config}>
      {children}
    </OktoProvider>
  );
};

export const useOkto = () => useContext(OktoContext); 