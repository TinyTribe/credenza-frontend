'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ProfileForm from '@/features/auth/profile-form';
import OrganizationForm from '@/features/auth/organization-form';

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const accountType = searchParams.get('type');

  useEffect(() => {
    // Redirect to account-type if no type is specified
    if (
      !accountType ||
      (accountType !== 'talent' && accountType !== 'organization')
    ) {
      router.push('/account-type');
    }
  }, [accountType, router]);

  // Show loading while redirecting
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

  return (
    <>{accountType === 'talent' ? <ProfileForm /> : <OrganizationForm />}</>
  );
}
