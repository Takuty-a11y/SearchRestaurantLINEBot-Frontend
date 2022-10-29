import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Page404 } from "../components/pages/Page404";
import { RestaurantSearch } from "../components/pages/RestaurantSearch";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        index
        element={<HeaderLayout>{<RestaurantSearch />}</HeaderLayout>}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
