'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function ConnectWalletPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const accountType = searchParams.get('type');

  useEffect(() => {
    if (
      !accountType ||
      (accountType !== 'talent' && accountType !== 'organization')
    ) {
      router.push('/account-type');
    }
  }, [accountType, router]);

  if (
    !accountType ||
    (accountType !== 'talent' && accountType !== 'organization')
  ) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold text-blue-600">CREDENZA</div>
          <p>Redirecting...</p>
        </div>
      </div>
    );
  }

  const handleConnect = (walletType: string) => {
    console.log(`Connecting to ${walletType} wallet`);
    setTimeout(() => {
      router.push(`/profile?type=${accountType}`);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="text-2xl font-bold text-blue-600">CREDENZA</div>
        </div>

        {/* Progress Bar */}
        {/* <ProgressBar currentStep={1} totalSteps={3} /> */}

        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Connect Your StarkNet Wallet
          </h1>
        </div>

        <div className="mb-6 space-y-4">
          <div className="cursor-pointer transition-colors hover:border-gray-300">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500">
                    <span className="text-sm font-bold text-white">A</span>
                  </div>
                  <span className="font-medium text-gray-900">Argent</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleConnect('argent')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer transition-colors hover:border-gray-300">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                    <span className="text-sm font-bold text-white">B</span>
                  </div>
                  <span className="font-medium text-gray-900">Braavos</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleConnect('braavos')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-gray-100 p-4">
          <p className="text-center text-xs text-gray-600">
            By connecting your wallet, you agree to our{' '}
            <a href="#" className="text-blue-600 underline">
              Terms and Conditions
            </a>{' '}
            and our{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
          <div className="flex items-start space-x-2">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600" />
            <p className="text-xs text-yellow-800">
              Credenza will never ask for your private keys or seed phrase. Only
              connect wallets you trust and control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
