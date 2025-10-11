'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPolicy() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/refund-policy');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to Refund Policy...</p>
      </div>
    </div>
  );
}