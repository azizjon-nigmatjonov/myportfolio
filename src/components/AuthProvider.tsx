'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { fetchMyInfo } = useAuthStore();

  useEffect(() => {
    fetchMyInfo();
  }, [fetchMyInfo]);

  return <>{children}</>;
}





