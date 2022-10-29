import { useCallback, useState } from "react";
import axios from "axios";

import { useMessage } from "./useMessage";
import { large_area, middle_area } from "../types/api/area";

export const useAllArea = () => {
  const [loading, setloading] = useState(false);
  const { showMessage } = useMessage();
  const [largeAreas, setLargeAreas] = useState<Array<large_area>>([]);
  const [middleAreas, setMiddleAreas] = useState<Array<middle_area>>([]);

  const getLargeArea = useCallback(() => {
    setloading(true);
    axios
      .get<Array<large_area>>(
        `https://search-restaurantbot-server.herokuapp.com/api/v1/largearea`
      )
      .then((res) => {
        if (res.data) {
          setLargeAreas(res.data);
        } else {
          showMessage({
            title: "エリアが見つかりませんでした",
            status: "error",
          });
        }
      })
      .catch(() => {
        showMessage({
          title: "エリア情報の取得に失敗しました",
          status: "error",
        });
      })
      .finally(() => {
        setloading(false);
      });
  }, [showMessage, setLargeAreas]);

  const getMiddleArea = useCallback(
    (largeareaCode: string) => {
      if (largeareaCode === "") {
        setMiddleAreas([]);
        return;
      }
      setloading(true);
      axios
        .get<Array<middle_area>>(
          `https://search-restaurantbot-server.herokuapp.com/api/v1/middlearea`,
          {
            params: {
              largeareaCode,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            setMiddleAreas(res.data);
          } else {
            showMessage({
              title: "エリアが見つかりませんでした",
              status: "error",
            });
          }
        })
        .catch(() => {
          showMessage({
            title: "エリア情報の取得に失敗しました",
            status: "error",
          });
        })
        .finally(() => {
          setloading(false);
        });
    },
    [showMessage, setMiddleAreas]
  );

  return { getLargeArea, getMiddleArea, loading, largeAreas, middleAreas };
};
