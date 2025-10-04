export interface MyInfo {
  id: number;
  name: string;
  profilePicture: string;
}

export interface AuthState {
  myInfo: MyInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}




