import { FC, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
/*type StringContextType = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
];
type BooleanContextType = [
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
];*/
type NumberContextType = [
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
];

//ユーザIDを保持するコンテキスト
export const UserIdContext = createContext<NumberContextType>(
  {} as NumberContextType,
);

export const ContextProviders: FC<Props> = ({ children }) => {
  //ユーザーIDを保持するステート
  const [id, setId] = useState(0);
  return (
    <UserIdContext.Provider value={[id, setId]}>
      {children}
    </UserIdContext.Provider>
  );
};
