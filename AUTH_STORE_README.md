# Auth Store Documentation

This project uses Zustand for authentication state management. The auth store provides a centralized way to manage user authentication information throughout the application.

## Files Created

- `src/types/auth.ts` - TypeScript interfaces for authentication
- `src/store/auth.ts` - Zustand store for authentication state
- `src/components/AuthProvider.tsx` - Provider component to initialize auth state
- `src/components/AuthExample.tsx` - Example component showing how to use the auth store

## Usage

### Basic Usage

```tsx
import { useMyInfo, useIsAuthenticated } from '@/store/auth';

function MyComponent() {
  const myInfo = useMyInfo();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {myInfo?.name}!</div>;
}
```

### Advanced Usage

```tsx
import { useAuthStore } from '@/store/auth';

function AuthActions() {
  const { fetchMyInfo, logout, isLoading, error } = useAuthStore();

  return (
    <div>
      <button onClick={fetchMyInfo} disabled={isLoading}>
        Refresh User Info
      </button>
      <button onClick={logout}>Logout</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

## Store Features

- **Persistence**: User info is automatically saved to localStorage
- **Loading States**: Track loading and error states
- **Type Safety**: Full TypeScript support
- **Selectors**: Pre-built selectors for common use cases
- **Actions**: Methods to update auth state

## Available Selectors

- `useMyInfo()` - Get current user info
- `useIsAuthenticated()` - Check if user is authenticated
- `useAuthLoading()` - Get loading state
- `useAuthError()` - Get error state

## Available Actions

- `fetchMyInfo()` - Fetch user info from API
- `setMyInfo(myInfo)` - Set user info manually
- `logout()` - Clear auth state
- `clearAuth()` - Clear all auth data
- `setLoading(loading)` - Set loading state
- `setError(error)` - Set error state

