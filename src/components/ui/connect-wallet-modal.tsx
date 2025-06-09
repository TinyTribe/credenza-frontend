// 'use client';

// import { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import Image from 'next/image';
// import { useWallet } from '@/components/wallet-provider';

// interface ConnectWalletModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ConnectWalletModal = ({ isOpen, onClose }: ConnectWalletModalProps) => {
//   const { connect } = useWallet();

//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-200"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-150"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-40" />
//         </Transition.Child>

//         <div className="fixed inset-0 flex items-center justify-center px-4">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-150"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
//               {/* Logo */}
//               <div className="flex justify-center mb-6">
//                 <Image src="/logo.svg" alt="Credenza Logo" width={150} height={40} />
//               </div>

//               {/* Progress bar mock */}
//               <div className="w-40 h-2 bg-gray-200 rounded-full mx-auto mb-6 relative">
//                 <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 rounded-full" />
//               </div>

//               {/* Title */}
//               <h2 className="text-center text-lg font-semibold mb-6">Connect your Wallet</h2>

//               {/* Wallet options */}
//               <div className="space-y-4">
//                 {/* Argent X */}
//                 <div className="flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-gray-50">
//                   <div className="flex items-center gap-2">
//                     <Image src="/icons/argent.svg" alt="Argent X" width={24} height={24} />
//                     <span className="font-medium text-sm">Argent</span>
//                   </div>
//                   <button
//                     onClick={() => connect('argentX')}
//                     className="text-blue-600 hover:underline text-sm font-medium"
//                   >
//                     Connect
//                   </button>
//                 </div>

//                 {/* Braavos */}
//                 <div className="flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-gray-50">
//                   <div className="flex items-center gap-2">
//                     <Image src="/icons/braavos.svg" alt="Braavos" width={24} height={24} />
//                     <span className="font-medium text-sm">Braavos</span>
//                   </div>
//                   <button
//                     onClick={() => connect('braavos')}
//                     className="text-blue-600 hover:underline text-sm font-medium"
//                   >
//                     Connect
//                   </button>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="mt-6 text-xs text-gray-500 text-center px-4">
//                 By connecting your wallet, you agree to our{' '}
//                 <span className="underline cursor-pointer">Terms and Conditions</span> and our{' '}
//                 <span className="underline cursor-pointer">Privacy Policy</span>.
//               </div>
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default ConnectWalletModal;
'use client';

import { useWallet } from '@/components/wallet-provider';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal = ({ isOpen, onClose }: ConnectWalletModalProps) => {
  const { connect } = useWallet();

  return (
    <Dialog as={Fragment} open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image src="/icons/logo.svg" alt="Credenza Logo" width={200} height={50} />
          </div>

          {/* Progress bar */}
          <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mb-8 relative">
            <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 rounded-full" />
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl font-bold mb-10">Connect Your Wallet</h2>

          {/* Wallet options */}
          <div className="space-y-6">
            {/* Argent X */}
            <div className="flex items-center justify-between border-2 rounded-xl px-6 py-5 hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <Image src="/icons/argent.png" alt="Argent X" width={40} height={40} />
                <span className="text-lg font-semibold">Argent X</span>
              </div>
              <button
                onClick={() => connect('argentX')}
                className="text-blue-600 hover:underline text-base font-medium"
              >
                Connect
              </button>
            </div>

            {/* Braavos */}
            <div className="flex items-center justify-between border-2 rounded-xl px-6 py-5 hover:bg-gray-50 transition">
              <div className="flex items-center gap-4">
                <Image src="/icons/braavos.svg" alt="Braavos" width={80} height={60} />
                <span className="text-lg font-semibold">Braavos</span>
              </div>
              <button
                onClick={() => connect('braavos')}
                className="text-blue-600 hover:underline text-base font-medium"
              >
                Connect
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 text-sm text-gray-500 text-center px-6">
            By connecting your wallet, you agree to our{' '}
            <span className="underline cursor-pointer">Terms of Service</span> and{' '}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConnectWalletModal;
