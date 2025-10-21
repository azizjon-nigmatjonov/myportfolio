import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PortfolioState, Portfolio } from '@/types/portfolio';
import apiClient from '@/lib/api';

interface PortfoliosStore extends PortfolioState {
  // Single portfolio state
  portfolio: Portfolio | null;

  // Actions
  setPortfolios: (portfolios: Portfolio[]) => void;
  setPortfolio: (portfolio: Portfolio) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchPortfolios: () => Promise<void>;
  fetchPortfolioById: (id: string) => Promise<void>;
  clearPortfolios: () => void;
}

const fetchPortfoliosFromAPI = async (): Promise<Portfolio[]> => {
  const response = await apiClient.get("/portfolios");
  return response.data;
};

const fetchPortfolioByIdFromAPI = async (id: string): Promise<Portfolio> => {
  const response = await apiClient.get(`/portfolios/${id}`);
  return response.data;
};

export const usePortfoliosStore = create<PortfoliosStore>()(
  persist(
    (set, get) => ({
      // Initial state
      portfolios: [],
      portfolio: null as Portfolio | null,
      isLoading: false,
      error: null,

      // Actions
      setPortfolios: (portfolios: Portfolio[]) => {
        set({
          portfolios,
          error: null,
        });
      },

      setPortfolio: (portfolio: Portfolio) => {
        set({
          portfolio,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error, isLoading: false });
      },

      fetchPortfolios: async () => {
        const { setLoading, setError, setPortfolios } = get();
        
        try {
          setLoading(true);
          setError(null);
          
          const portfolios = await fetchPortfoliosFromAPI();
          if (portfolios.length > 0) {
            setPortfolios(portfolios);
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch portfolios';
          setError(errorMessage);
          console.error('Error fetching portfolios:', error);
        } finally {
          setLoading(false);
        }
      },

      fetchPortfolioById: async (id: string) => {
        const { setLoading, setError, setPortfolio, portfolios } = get();
        const portfolio = portfolios.find((portfolio) => portfolio.id === id);
        setPortfolio(portfolio || {} as Portfolio);
        try {
          setLoading(true);
          setError(null);
          
          const portfolio = await fetchPortfolioByIdFromAPI(id);
          setPortfolio(portfolio);
        } catch (error) {
          const portfolio = portfolios.find((portfolio) => portfolio.id === id);
          setPortfolio(portfolio || {} as Portfolio);
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch portfolio';
          setError(errorMessage);
          console.error('Error fetching portfolio:', error);
        } finally {
          setLoading(false);
        }
      },

      clearPortfolios: () => {
        set({
          portfolios: [],
          portfolio: null,
          isLoading: false,
          error: null,
        });
      },
    }),
    {
      name: 'portfolios-storage', // unique name for localStorage key
      partialize: (state) => ({
        portfolios: state.portfolios,
        portfolio: state.portfolio,
      }), // Only persist these fields
    }
  )
);

// Selectors for easier access to specific parts of the state
export const usePortfolios = () => usePortfoliosStore((state) => state.portfolios);
export const usePortfolio = () => usePortfoliosStore((state) => state.portfolio);
export const usePortfoliosLoading = () => usePortfoliosStore((state) => state.isLoading);
export const usePortfoliosError = () => usePortfoliosStore((state) => state.error);

