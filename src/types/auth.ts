export type User = {
  id: number;
  userName: string;
};

export type SignInCredentials = {
  userName: string;
  password: string;
};

export type SignInResponse = {
  status: string;
  message: string;
  data: {
    user: User;
    token: string;
  };
};

export type AuthState = {
  user: User | null;
  token: string;
  loading: boolean;
  error: string | null;
};
