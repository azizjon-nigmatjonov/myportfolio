import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, MyInfo } from '@/types/auth';
import apiClient from '@/lib/api';

interface AuthStore extends AuthState {
  // Actions
  setMyInfo: (myInfo: MyInfo) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchMyInfo: () => Promise<void>;
  clearAuth: () => void;
  logout: () => void;
}

const fetchMyInfoFromAPI = async (): Promise<MyInfo> => {
  const response = await apiClient.get("/me");
  return response.data;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      myInfo: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setMyInfo: (myInfo: MyInfo) => {
        set({
          myInfo,
          isAuthenticated: true,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error, isLoading: false });
      },

      fetchMyInfo: async () => {
        const { setLoading, setError, setMyInfo } = get();
        
        try {
          setLoading(true);
          setError(null);
          
          const myInfo = await fetchMyInfoFromAPI();
          setMyInfo(myInfo);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch user info';
          setError(errorMessage);
          console.error('Error fetching myInfo:', error);
          if (!sessionStorage.getItem('entered')) {
            sessionStorage.setItem('entered', 'true');
          }
        } finally {
          setLoading(false);
        }
      },

      clearAuth: () => {
        set({
          myInfo: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      logout: () => {
        // Clear auth state
        get().clearAuth();
        
        // You can add additional logout logic here
        // e.g., clearing tokens, redirecting to login page, etc.
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      partialize: (state) => ({
        myInfo: state.myInfo,
        isAuthenticated: state.isAuthenticated,
      }), // Only persist these fields
    }
  )
);

// Selectors for easier access to specific parts of the state
export const useMyInfo = () => useAuthStore((state) => state.myInfo);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);
