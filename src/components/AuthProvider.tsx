'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { fetchMyInfo, isLoading } = useAuthStore();

  useEffect(() => {
    // Fetch user info when the app loads
    fetchMyInfo();
  }, [fetchMyInfo]);

  return <>{children}</>;
}




