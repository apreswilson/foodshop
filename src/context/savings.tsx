import { createContext, Dispatch, SetStateAction } from "react";

export interface SavingsListContextType {
  savingsList: object;
  setSavingsList: Dispatch<SetStateAction<object>>;
}

const defaultContextValue: SavingsListContextType = {
  savingsList: {},
  setSavingsList: () => { },
};

export const SavingsContext = createContext<SavingsListContextType>(defaultContextValue);

