import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSearchUser } from "../../hooks/useSearchUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  const { searchUserText } = useSearchUser();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id: id, users: users });
      onOpen();
    },
    [onOpen, onSelectUser, users]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users
            .filter((user) =>
              user.username.toUpperCase().match(searchUserText.toUpperCase())
            )
            .map((userInfo) => (
              <WrapItem key={userInfo.id}>
                <UserCard
                  iconUrl="https://source.unsplash.com/random"
                  userInfo={userInfo}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
