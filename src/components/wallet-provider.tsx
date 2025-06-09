// 'use client';

// import {
//   StarknetConfig,
//   InjectedConnector,
//   publicProvider,
//   useConnect,
//   useDisconnect,
//   useAccount,
// } from '@starknet-react/core';
// import { sepolia } from '@starknet-react/chains';
// import {
//   createContext,
//   useContext,
//   useMemo,
//   useEffect,
//   useState,
//   ReactNode,
// } from 'react';

// type WalletType = 'argentX' | 'braavos';

// type WalletContextType = {
//   connect: (wallet: WalletType) => void;
//   disconnect: () => void;
//   address?: string;
//   status: string;
// };

// const WalletContext = createContext<WalletContextType | null>(null);

// function WalletContextProvider({ children }: { children: ReactNode }) {
//   const { connect: connectWallet } = useConnect();
//   const { disconnect } = useDisconnect();
//   const { address, status } = useAccount();

//   const walletContextValue = useMemo(
//     () => ({
//       connect: (wallet: WalletType) => {
//         connectWallet({
//           connector: new InjectedConnector({
//             options:
//               wallet === 'argentX'
//                 ? { id: 'argentX', name: 'Argent X' }
//                 : { id: 'braavos', name: 'Braavos' },
//           }),
//         });
//       },
//       disconnect,
//       address,
//       status,
//     }),
//     [connectWallet, disconnect, address, status]
//   );

//   return (
//     <WalletContext.Provider value={walletContextValue}>
//       {children}
//     </WalletContext.Provider>
//   );
// }

// export default function WalletProvider({ children }: { children: ReactNode }) {
//   return (
//     <StarknetConfig
//       chains={[sepolia]}
//       provider={publicProvider()}
//       connectors={[
//         new InjectedConnector({ options: { id: 'argentX', name: 'Argent X' } }),
//         new InjectedConnector({ options: { id: 'braavos', name: 'Braavos' } }),
//       ]}
//     >
//       <WalletContextProvider>{children}</WalletContextProvider>
//     </StarknetConfig>
//   );
// }

// export const useWallet = () => {
//   const context = useContext(WalletContext);
//   if (!context) {
//     throw new Error('useWallet must be used within WalletProvider');
//   }
//   return context;
// };
'use client';

import {
  StarknetConfig,
  InjectedConnector,
  publicProvider,
  useConnect,
  useDisconnect,
  useAccount,
} from '@starknet-react/core';
import { sepolia } from '@starknet-react/chains';
import {
  createContext,
  useContext,
  useMemo,
  
  ReactNode,
} from 'react';

type WalletType = 'argentX' | 'braavos';

type WalletContextType = {
  connect: (wallet: WalletType) => void;
  disconnect: () => void;
  address?: string;
  status: string;
};

const WalletContext = createContext<WalletContextType | null>(null);

function WalletContextProvider({ children }: { children: ReactNode }) {
  const { connect: connectWallet } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, status } = useAccount();

  const walletContextValue = useMemo(
    () => ({
      connect: (wallet: WalletType) => {
        connectWallet({
          connector: new InjectedConnector({
            options:
              wallet === 'argentX'
                ? { id: 'argentX', name: 'Argent X' }
                : { id: 'braavos', name: 'Braavos' },
          }),
        });
      },
      disconnect,
      address,
      status,
    }),
    [connectWallet, disconnect, address, status]
  );

  return (
    <WalletContext.Provider value={walletContextValue}>
      {children}
    </WalletContext.Provider>
  );
}

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={publicProvider()}
      connectors={[
        new InjectedConnector({ options: { id: 'argentX', name: 'Argent X' } }),
        new InjectedConnector({ options: { id: 'braavos', name: 'Braavos' } }),
      ]}
    >
      <WalletContextProvider>{children}</WalletContextProvider>
    </StarknetConfig>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
export { WalletContext, WalletContextProvider }; // Export for potential future use