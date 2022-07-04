import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setloading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser({ ...res.data, isAdmin: res.data.id === 10 });
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできませんでした", status: "error" });
        })
        .finally(() => {
          setloading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );
  const logout = useCallback(() => {
    setLoginUser(null);
    showMessage({ title: "ログアウトしました", status: "success" });
    navigate("/");
  }, [setLoginUser, showMessage, navigate]);
  return { login, loading, logout };
};
