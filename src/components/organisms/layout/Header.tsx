import { FC, memo, ReactNode, useCallback } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { SettingButton } from "../../atoms/button/SettingButton";
import { PrimarySearchInput } from "../../atoms/input/PrimarySearchInput";

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();

  const onClickHome = useCallback(() => {
    navigate(`${location.pathname}?${params}`);
  }, [navigate,location.pathname, params]);

  return (
    <>
      <Flex
        as="nav"
        justify="center"
        py={3}
        bgColor="white"
        shadow="md"
        top={0}
        position="sticky"
        zIndex={"sticky"}
      >
        <Flex w="100%" maxW="8xl" px={3} align="center" justify="space-between">
          <Flex justify="flex-start" align={"center"}>
            <Flex
              align={"center"}
              as="a"
              mr={5}
              display={{ base: "none", md: "block" }}
              _hover={{ cursor: "pointer" }}
              onClick={onClickHome}
            >
              <Heading as="h1" fontSize="1.8rem" color="gray.800">
                飲食店サーチBot
              </Heading>
            </Flex>
          </Flex>
          <Flex align="center" justify="center" flexGrow="1">
            <PrimarySearchInput
              placeholder="キーワード検索"
            />
          </Flex>
          <Flex align="center" justify="flex-start" ml={5}>
            <SettingButton />
          </Flex>
        </Flex>
      </Flex>
      {children}
    </>
  );
});
