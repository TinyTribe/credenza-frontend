'use client';

import { useWallet } from '@/components/wallet-provider';
import Image from 'next/image';

const WalletConnectionUI = () => {
  const { connect, disconnect, address, status } = useWallet();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Image src="/logo.svg" alt="Credenza Logo" width={150} height={40} className="mb-6" />

      <div className="mb-6 w-40 h-2 bg-gray-200 rounded-full relative">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 rounded-full" />
      </div>

      <h1 className="text-xl font-semibold mb-8">Connect your Wallet</h1>

      <div className="space-y-4 w-full max-w-xs">
        {/* Argent X */}
        <div className="flex items-center justify-between border rounded-xl px-4 py-3">
          <div className="flex items-center space-x-2">
            <Image src="/icons/argent.svg" alt="Argent" width={24} height={24} />
            <span>Argent X</span>
          </div>
          <button
            onClick={() => connect('argentX')}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Connect
          </button>
        </div>

        {/* Braavos */}
        <div className="flex items-center justify-between border rounded-xl px-4 py-3">
          <div className="flex items-center space-x-2">
            <Image src="/icons/braavos.svg" alt="Braavos" width={24} height={24} />
            <span>Braavos</span>
          </div>
          <button
            onClick={() => connect('braavos')}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Connect
          </button>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center max-w-sm">
        By connecting your wallet, you agree to our{' '}
        <span className="underline cursor-pointer">Terms and Conditions</span> and our{' '}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </div>

      {status === 'connected' && address && (
        <div className="mt-6 text-sm text-green-600">
          Connected as: <span className="font-mono">{address}</span>
          <button onClick={disconnect} className="ml-4 text-red-500 underline">
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnectionUI;
