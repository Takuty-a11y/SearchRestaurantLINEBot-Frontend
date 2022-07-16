import { FC, memo, ReactNode, useCallback, useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { PrimarySearchInput } from "../../atoms/input/PrimarySearchInput";
import { useSearchTask } from "../../../hooks/useSearchTask";
import { useSearchUser } from "../../../hooks/useSearchUser";

type Props = {
  children: ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;
  const [page, setPage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { searchTaskText, setSearchTaskText } = useSearchTask();
  const { searchUserText, setSearchUserText } = useSearchUser();

  const onClickHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const VisibleSearchInput = useCallback(
    (path: string) => {
      if (path === "/home") {
        return (
          <PrimarySearchInput
            placeholder="タスク名検索"
            textValue={searchTaskText}
            setTextValue={setSearchTaskText}
          />
        );
      } else if (path === "/home/user_management") {
        return (
          <PrimarySearchInput
            placeholder="ユーザー名検索"
            textValue={searchUserText}
            setTextValue={setSearchUserText}
          />
        );
      } else {
        return;
      }
    },
    [searchTaskText, setSearchTaskText, searchUserText, setSearchUserText]
  );

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
