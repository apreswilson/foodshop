import {
  createContext,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (newToken: string) => void;
}

const defaultValues = {
  token: "",
  setToken: () => { }
}

export const AuthContext = createContext<AuthContextType>(defaultValues);