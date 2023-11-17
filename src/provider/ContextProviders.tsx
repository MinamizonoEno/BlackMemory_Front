import { FC, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type StringContextType = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
];

type BooleanContextType = [
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
];
type NumberContextType = [
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
];

export const UserNameContext = createContext<StringContextType>(
  {} as StringContextType
);
//ユーザIDを保持するコンテキスト
export const UserIdContext = createContext<NumberContextType>(
  {} as NumberContextType
);
//ログインの可否を保持するコンテキスト
export const LoginStateContext = createContext<BooleanContextType>(
  {} as BooleanContextType
);

export const ContextProviders: FC<Props> = ({ children }) => {
  //ユーザーの名前を保持するステート
  const [userName, setUserName] = useState("user");
  //ユーザーIDを保持するステート
  const [id, setId] = useState(0);
  //ログインの可否を保持するステート
  const [loginState, setLoginState] = useState(true);

  return (
    <UserNameContext.Provider value={[userName, setUserName]}>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <UserIdContext.Provider value={[id, setId]}>
          {children}
        </UserIdContext.Provider>
      </LoginStateContext.Provider>
    </UserNameContext.Provider>
  );
};
