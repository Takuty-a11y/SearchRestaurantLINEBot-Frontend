import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type SearchTaskContextType = {
  searchTaskText: string;
  setSearchTaskText: Dispatch<SetStateAction<string>>;
};
export const SearchTaskContext = createContext<SearchTaskContextType>(
  {} as SearchTaskContextType
);
export type SearchUserContextType = {
  searchUserText: string;
  setSearchUserText: Dispatch<SetStateAction<string>>;
};
export const SearchUserContext = createContext<SearchUserContextType>(
  {} as SearchUserContextType
);

type Props = {
  children: ReactNode;
};
export const SearchTextProvider = (props: Props) => {
  const { children } = props;
  const [searchTaskText, setSearchTaskText] = useState("");
  const [searchUserText, setSearchUserText] = useState("");

  return (
    <SearchTaskContext.Provider value={{ searchTaskText, setSearchTaskText }}>
      <SearchUserContext.Provider value={{ searchUserText, setSearchUserText }}>
        {children}
      </SearchUserContext.Provider>
    </SearchTaskContext.Provider>
  );
};
