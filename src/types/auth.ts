export interface MyInfo {
  id: number;
  name: string;
  profilePicture: string;
  email: string;  
  phone: string;
  github_url: string;
  linkedin_url: string;
  resume_url: string;
  work_experience: string;
  about_me: string;
}

export interface AuthState {
  myInfo: MyInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}





