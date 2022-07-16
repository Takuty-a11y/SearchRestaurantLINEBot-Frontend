import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

type Props = {
  children: ReactNode;
};

//ログイン情報をローカルストレージから取得
const getDefaultAuthInfo = (): LoginUser | null => {
  const defaultAuthInfo = window.localStorage.getItem("authInfo");
  if (defaultAuthInfo) {
    return JSON.parse(defaultAuthInfo) as LoginUser;
  } else {
    return null;
  }
};
//ログイン情報をローカルストレージに保存
const setAutoInfoToLocalStorage = (authInfo: LoginUser | null): void => {
  const authInfoStringfy = JSON.stringify(authInfo);
  window.localStorage.setItem("authInfo", authInfoStringfy);
};

export const LoginUserProvider = (props: Props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(
    getDefaultAuthInfo()
  );
  const navigate = useNavigate();

  useEffect(() => {
    setAutoInfoToLocalStorage(loginUser);
    if (loginUser === null) {
      navigate("/");
    }
  }, [loginUser, navigate]);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
