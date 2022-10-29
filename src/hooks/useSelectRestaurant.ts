import { useCallback, useState } from "react";

import { Restaurant } from "../types/api/restaurant";

type Props = {
  id: string;
  restaurants: Array<Restaurant>;
};

export const useSelectRestaurant = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const onSelectRestaurant = useCallback((props: Props) => {
    const { id, restaurants } = props;
    const targetRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(targetRestaurant ?? null);
  }, []);
  return { onSelectRestaurant, selectedRestaurant };
};
