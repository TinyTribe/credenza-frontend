'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useWallet } from '@/components/wallet-provider';
import ConnectWalletModal from '@/components/ui/connect-wallet-modal';

const Navbar = () => {
  const { address, disconnect } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : null;

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image src="/icons/logo.svg" alt="Credenza" width={120} height={40} />
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {!address ? (
          <>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Connect Wallet
            </button>
                <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          </>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-gray-700">{truncatedAddress}</span>
            <button
              onClick={disconnect}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
