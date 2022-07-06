import { FC, memo, ReactNode, useCallback, useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimarySearchInput } from "../../atoms/input/PrimarySearchInput";

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [page, setPage] = useState("");
  const location = useLocation();

  const onClickHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const VisibleSearchInput = (path: string) => {
    if (path === "/home") {
      return <PrimarySearchInput placeholder="タスク名検索" />;
    } else if (path === "/home/user_management") {
      return <PrimarySearchInput placeholder="ユーザーID検索" />;
    } else {
      return;
    }
  };

  useEffect(() => {
    setPage(location.pathname);
  }, [setPage, location.pathname]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.800"
        align="center"
        justify="space-between"
        h={16}
        padding={5}
      >
        <Flex
          align={"center"}
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading
            as="h1"
            fontSize={{ base: "xl", md: "1.6rem" }}
            fontFamily="cursive"
            color="gray.100"
          >
            User Todo App
          </Heading>
        </Flex>
        <Flex align="center" justify="flex-end">
          {VisibleSearchInput(page)}
          <Box mt={1} p={2}>
            <MenuIconButton />
          </Box>
        </Flex>
      </Flex>
      {children}
    </>
  );
});
