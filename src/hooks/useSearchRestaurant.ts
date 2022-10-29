import { Dispatch, SetStateAction, useCallback, useState } from "react";
import axios from "axios";

import { useMessage } from "./useMessage";
import { Restaurant } from "../types/api/restaurant";
import { QueryParam } from "../types/api/queryparam";

export const useSearchRestaurant = () => {
  const [loading, setloading] = useState(false);
  const { showMessage } = useMessage();
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);

  const searchRestaurant = useCallback(
    (props: QueryParam) => {
      const { keyword, genre, large_area, middle_area, budget, sort } = props;
      setloading(true);
      axios
        .get<Array<Restaurant>>(
          `https://search-restaurantbot-server.herokuapp.com/api/v1/search`,
          {
            params: {
              keyword: keyword,
              genre: genre,
              large_area: large_area ? large_area : "Z011",
              middle_area: middle_area,
              budget: budget,
              sort: sort ? sort : "4",
              page: 0,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            setRestaurants(res.data);
          } else {
            showMessage({
              title: "店舗が見つかりませんでした",
              status: "error",
            });
          }
        })
        .catch(() => {
          showMessage({
            title: "飲食店情報の取得に失敗しました",
            status: "error",
          });
        })
        .finally(() => {
          setloading(false);
        });
    },
    [showMessage, setRestaurants]
  );

  const getNextRestaurants = useCallback(
    (props: QueryParam, setHasMore: Dispatch<SetStateAction<boolean>>) => {
      const { keyword, genre, large_area, middle_area, budget, sort, page } =
        props;
      setloading(true);
      axios
        .get<Array<Restaurant>>(
          `https://search-restaurantbot-server.herokuapp.com/api/v1/search`,
          {
            params: {
              keyword: keyword,
              genre: genre,
              large_area: large_area ? large_area : "Z011",
              middle_area: middle_area,
              budget: budget,
              sort: sort ? sort : "4",
              page: page,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            if (res.data.length > 0) {
              setRestaurants([...restaurants, ...res.data]);
            } else {
              setHasMore(false);
            }
          } else {
            showMessage({
              title: "店舗が見つかりませんでした",
              status: "error",
            });
          }
        })
        .catch(() => {
          showMessage({
            title: "飲食店情報の取得に失敗しました",
            status: "error",
          });
        })
        .finally(() => {
          setloading(false);
        });
    },
    [showMessage, setRestaurants, restaurants]
  );
  return { searchRestaurant, getNextRestaurants, loading, restaurants };
};
