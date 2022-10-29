import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import { useSelectRestaurant } from "../../hooks/useSelectRestaurant";
import { RestaurantCard } from "../organisms/restaurant/RestaurantCard";
import { RestaurantDetailModal } from "../organisms/restaurant/RestaurantDetailModal";
import { useSearchRestaurant } from "../../hooks/useSearchRestaurant";
import { QueryParam } from "../../types/api/queryparam";

export const RestaurantSearch: FC = memo(() => {
  const [hasMore, setHasMore] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchRestaurant, getNextRestaurants, loading, restaurants } =
    useSearchRestaurant();
  const { onSelectRestaurant, selectedRestaurant } = useSelectRestaurant();
  const [params] = useSearchParams();

  const onClickUser = useCallback(
    (id: string) => {
      onSelectRestaurant({ id: id, restaurants: restaurants });
      onOpen();
    },
    [onOpen, onSelectRestaurant, restaurants]
  );

  const loadMore =  useCallback(
    async () => {
      const query: QueryParam = {
        keyword: params.get("keyword"),
        genre: params.get("genre"),
        large_area: params.get("large_area"),
        middle_area: params.get("middle_area"),
        budget: params.get("budget"),
        sort: params.get("sort"),
        page: pageCount + 1,
      };
      getNextRestaurants(query, setHasMore);
      setPageCount(pageCount + 1)
    },
    [params, getNextRestaurants, pageCount]
  );

  useEffect(() => {
    setHasMore(true)
    const query: QueryParam = {
      keyword: params.get("keyword"),
      genre: params.get("genre"),
      large_area: params.get("large_area"),
      middle_area: params.get("middle_area"),
      budget: params.get("budget"),
      sort: params.get("sort"),
    };
    searchRestaurant(query);
  }, [params, searchRestaurant]);

  return (
    <Box>
      <Box px={3} m="auto" maxW="8xl">
        <Text
          my={5}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="gray.800"
        >
          店舗一覧
        </Text>
        {loading ? (
          <Grid
            templateColumns={{
              base: "repeat(1, minmax(0px, 1fr))",
              md: "repeat(2, minmax(0px, 1fr))",
              lg: "repeat(3, minmax(0px, 1fr))",
            }}
            gap={{ base: 3, md: 4 }}
          >
            {[...Array(12)].map((i) => (
              <GridItem key={i}>
                <Skeleton height="250px" />
              </GridItem>
            ))}
          </Grid>
        ) : restaurants.length > 0 ? (
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
            <Grid
              templateColumns={{
                base: "repeat(1, minmax(0px, 1fr))",
                md: "repeat(2, minmax(0px, 1fr))",
                lg: "repeat(3, minmax(0px, 1fr))",
              }}
              gap={{ base: 3, md: 4 }}
            >
              {restaurants.map((restaurant) => (
                <GridItem key={restaurant.id}>
                  <RestaurantCard
                    iconUrl={restaurant.photo.pc.l}
                    restaurantInfo={restaurant}
                    onClick={onClickUser}
                  />
                </GridItem>
              ))}
            </Grid>
          </InfiniteScroll>
        ) : (
          <div>検索結果が見つかりませんでした</div>
        )}
      </Box>
      <RestaurantDetailModal
        isOpen={isOpen}
        onClose={onClose}
        restaurant={selectedRestaurant}
      />
    </Box>
  );
});
