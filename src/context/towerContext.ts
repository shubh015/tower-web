import { createContext, useContext } from "react";

export const TowerContext = createContext<TowerContextProps>(
  {} as TowerContextProps
);

export const useGameContext = () => {
  if (!TowerContext)
    throw new Error("useTowerContext must be used within a GameContextProvider");
  return useContext(TowerContext);
};
