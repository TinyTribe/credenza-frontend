'use client';

import { useState } from 'react';
import { useWallet } from '@/components/wallet-provider';
import ConnectWalletModal from '@/components/ui/connect-wallet-modal';

const WalletConnectButton = () => {
  const { address, status, disconnect } = useWallet();
  const [showModal, setShowModal] = useState(false);

  const handleConnectClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (status === 'connecting') {
    return <button disabled>Connecting...</button>;
  }

  if (status === 'connected' && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-mono">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button
          onClick={disconnect}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleConnectClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Connect Wallet
      </button>
      <ConnectWalletModal isOpen={showModal} onClose={handleCloseModal} />

      {/* <ConnectWalletModal open={showModal} onClose={handleCloseModal} /> */}
      {/* <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

    </>
  );
};

export default WalletConnectButton;
