'use client';

import { useMyInfo, useIsAuthenticated, useAuthLoading, useAuthError, useAuthStore } from '@/store/auth';

export function AuthExample() {
  const myInfo = useMyInfo();
  const isAuthenticated = useIsAuthenticated();
  const isLoading = useAuthLoading();
  const error = useAuthError();
  const { fetchMyInfo, logout } = useAuthStore();

  if (isLoading) {
    return <div>Loading user info...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchMyInfo}>Retry</button>
      </div>
    );
  }

  if (!isAuthenticated || !myInfo) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <h2>Welcome, {myInfo.name}!</h2>
      <img src={myInfo.profilePicture} alt="Profile" width={50} height={50} />
      <p>User ID: {myInfo.id}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}





