import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ExperienceData,
  AboutMeApiResponse,
  ContactApiResponse,
  ExperienceApiResponse,
  SkillApiResponse,
} from '@/types/experience';
import apiClient from '@/lib/api';
import { transformExperienceData } from '@/lib/transformers/experience';

interface ExperienceState {
  // Data
  experienceData: ExperienceData | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setExperienceData: (data: ExperienceData) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchExperienceData: () => Promise<void>;
  clearExperienceData: () => void;
}

const fetchAboutMeFromAPI = async (): Promise<AboutMeApiResponse | null> => {
  try {
    const response = await apiClient.get("/about-me");
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

const fetchContactsFromAPI = async (): Promise<ContactApiResponse[]> => {
  try {
    const response = await apiClient.get("/contacts");
    return response.data || [];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

const fetchExperiencesFromAPI = async (): Promise<ExperienceApiResponse[]> => {
  try {
    const response = await apiClient.get("/experiences");
    return response.data || [];
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
};

const fetchSkillsFromAPI = async (): Promise<SkillApiResponse[]> => {
  try {
    const response = await apiClient.get("/skills");
    return response.data || [];
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const useExperienceStore = create<ExperienceState>()(
  persist(
    (set, get) => ({
      // Initial state
      experienceData: null,
      isLoading: false,
      error: null,

      // Actions
      setExperienceData: (data: ExperienceData) => {
        set({
          experienceData: data,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error, isLoading: false });
      },

      fetchExperienceData: async () => {
        const { setLoading, setError, setExperienceData } = get();
        
        try {
          setLoading(true);
          setError(null);
          
          // Fetch all data in parallel
          const [aboutMe, contacts, experiences, skills] = await Promise.all([
            fetchAboutMeFromAPI(),
            fetchContactsFromAPI(),
            fetchExperiencesFromAPI(),
            fetchSkillsFromAPI(),
          ]);

          // Transform API responses to component format
          const experienceData = transformExperienceData(
            aboutMe,
            contacts,
            experiences,
            skills
          );

          setExperienceData(experienceData);
        } catch (error) {
          const errorMessage = error instanceof Error 
            ? error.message 
            : 'Failed to fetch experience data';
          setError(errorMessage);
          console.error('Error fetching experience data:', error);
        } finally {
          setLoading(false);
        }
      },

      clearExperienceData: () => {
        set({
          experienceData: null,
          isLoading: false,
          error: null,
        });
      },
    }),
    {
      name: 'experience-storage', // unique name for localStorage key
      partialize: (state) => ({
        experienceData: state.experienceData,
      }), // Only persist experience data
    }
  )
);

// Selectors for easier access to specific parts of the state
export const useExperienceData = () => useExperienceStore((state) => state.experienceData);
export const useExperienceLoading = () => useExperienceStore((state) => state.isLoading);
export const useExperienceError = () => useExperienceStore((state) => state.error);
