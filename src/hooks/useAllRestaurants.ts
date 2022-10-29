import { useCallback, useState } from "react";
import axios from "axios";

import { useMessage } from "./useMessage";
import { Restaurant } from "../types/api/restaurant";

export const useAllRestaurants = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const { showMessage } = useMessage();
  const getRestaurants = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Restaurant>>(`https://search-restaurantbot-server.herokuapp.com/api/v1/search`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch(() => {
        showMessage({
          title: "飲食店情報の取得に失敗しました",
          status: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);
  return { getRestaurants, loading, restaurants };
};
