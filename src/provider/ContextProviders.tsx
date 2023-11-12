import { FC, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type StringContextType = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
];
type NumberContextType = [
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
];
type BooleanContextType = [
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
];

export const ContextProviders: FC<Props> = ({ children }) => {
  return { children };
};
