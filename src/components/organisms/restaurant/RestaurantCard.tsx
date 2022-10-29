import { FC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { Restaurant } from "../../../types/api/restaurant";

type Props = {
  iconUrl: string;
  restaurantInfo: Restaurant;
  onClick: (id: string) => void;
};

export const RestaurantCard: FC<Props> = (props) => {
  const { iconUrl, restaurantInfo, onClick } = props;
  return (
    <Box
      //h="275px"
      borderRadius="lg"
      shadow="md"
      overflow="hidden"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(restaurantInfo.id)}
    >
      <Image
        w='100%'
        h="175px"
        objectFit="cover"
        src={iconUrl}
        alt="店舗画像"
        m="auto"
      />
      <Stack p={3} spacing={2}>
        <Text
          maxW="90%"
          fontSize="lg"
          fontWeight="bold"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          
        >
          {restaurantInfo.name}
        </Text>
        <Text 
          borderBottom="1px"
          borderBottomColor="gray.200"
        />
        <Text
          maxW="90%"
          fontSize="sm"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          >
          {restaurantInfo.catch}
        </Text>
      </Stack>
    </Box>
  );
};
