export interface Portfolio {
  _id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  status: string;
  tool: string;
  problem_statement: string;
  production_detailed_statment: string;
  intro_statment: string;
  showing_image_url: string | null;
  showing_inner_image_url: string;
  problem_image_url: string;
  production_image_url_1: string;
  production_image_url_2: string;
  production_image_url_3: string;
  production_image_url_4: string;
  next_project_image_url: string;
  tags: string[];
  stack: string[];
  id: string;
  created_date: string;
  release_date: string;
  created_at: string;
  updated_at: string;
}

export interface PortfolioState {
  portfolios: Portfolio[];
  isLoading: boolean;
  error: string | null;
}

