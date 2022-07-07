import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { SearchTextProvider } from "../providers/SearchTextProvider";
import { TaskListProvider } from "../providers/TaskListProvider";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <TaskListProvider>
        <SearchTextProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route path="home">
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<HeaderLayout>{route.children}</HeaderLayout>}
                />
              ))}
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </SearchTextProvider>
      </TaskListProvider>
    </LoginUserProvider>
  );
});
