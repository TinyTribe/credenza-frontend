// app/connect/page.tsx
'use client';

import WalletConnectionUI from '@/components/wallet-connection-ui';

export const dynamic = 'force-dynamic';

export default function ConnectPage() {
  return <WalletConnectionUI />;
}
