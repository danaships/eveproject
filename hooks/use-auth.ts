import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Character } from '@/types/eve';

interface AuthState {
  user: Character | null;
  accessToken: string | null;
  setAuth: (user: Character, accessToken: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setAuth: (user, accessToken) => set({ user, accessToken }),
      logout: () => set({ user: null, accessToken: null }),
    }),
    {
      name: 'eve-auth-storage',
    }
  )
);