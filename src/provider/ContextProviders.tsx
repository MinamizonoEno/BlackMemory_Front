import { FC, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type StringContextType = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
];
/*type BooleanContextType = [
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
];*/
type NumberContextType = [
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>,
];

//ユーザIDを保持するコンテキスト
export const UserIdContext = createContext<NumberContextType>(
  {} as NumberContextType
);
//日付を保持するコンテキスト
export const DateContext = createContext<StringContextType>(
  {} as StringContextType
);
//始業時刻を保持するコンテキスト
export const StartAtContext = createContext<StringContextType>(
  {} as StringContextType
);
//終業時刻を保持するコンテキスト
export const EndAtContext = createContext<StringContextType>(
  {} as StringContextType
);
//勤務時間を保持するコンテキスト
export const HoursContext = createContext<StringContextType>(
  {} as StringContextType
);
//仕事内容を保持するコンテキスト
export const ContentContext = createContext<StringContextType>(
  {} as StringContextType
);

export const ContextProviders: FC<Props> = ({ children }) => {
  //ユーザーIDを保持するステート
  const [id, setId] = useState(0);
  //日付を保持するステート
  const [date, setDate] = useState("");
  //始業時刻を保持するステート
  const [startAt, setStartAt] = useState("");
  //終業時刻を保持するステート
  const [endAt, setEndAt] = useState("");
  //勤務時間を保持するステート
  const [hours, setHours] = useState("");
  //仕事内容を保持するステート
  const [content, setContent] = useState("");

  return (
    <UserIdContext.Provider value={[id, setId]}>
      <DateContext.Provider value={[date, setDate]}>
        <StartAtContext.Provider value={[startAt, setStartAt]}>
          <EndAtContext.Provider value={[endAt, setEndAt]}>
            <HoursContext.Provider value={[hours, setHours]}>
              <ContentContext.Provider value={[content, setContent]}>
                {children}
              </ContentContext.Provider>
            </HoursContext.Provider>
          </EndAtContext.Provider>
        </StartAtContext.Provider>
      </DateContext.Provider>
    </UserIdContext.Provider>
  );
};
