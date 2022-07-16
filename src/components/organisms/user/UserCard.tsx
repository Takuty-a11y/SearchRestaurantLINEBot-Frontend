import { FC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { User } from "../../../types/api/user";

type Props = {
  iconUrl: string;
  userInfo: User;
  onClick: (id:number) => void;
};

export const UserCard: FC<Props> = (props) => {
  const { iconUrl, userInfo, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="gray.100"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={()=>onClick(userInfo.id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={iconUrl}
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userInfo.username}
        </Text>
        <Text fontSize="sm" color="gray">
          {userInfo.name}
        </Text>
      </Stack>
    </Box>
  );
};
