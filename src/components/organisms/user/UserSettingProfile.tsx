import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useMessage } from "../../../hooks/useMessage";

export const UserSettingProfile: FC = memo(() => {
  const { loginUser, setLoginUser } = useLoginUser();
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const { showMessage } = useMessage();

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClickUpdate = () => {
    if (loginUser == null) {
      return;
    }
    setLoginUser({ ...loginUser, username: userName, name: name });
    showMessage({ title: "更新しました", status: "success" });
  };

  useEffect(() => {
    setUserName(loginUser?.username ?? "");
    setName(loginUser?.name ?? "");
  }, [loginUser]);

  return (
    <Stack spacing={4} w="100%">
      <Image
        borderRadius="full"
        boxSize="160px"
        src="https://source.unsplash.com/random"
        alt="プロフィール画像"
        m="auto"
      />
      <FormControl>
        <FormLabel>名前</FormLabel>
        <Input value={userName} onChange={onChangeUserName} />
      </FormControl>
      <FormControl>
        <FormLabel>フルネーム</FormLabel>
        <Input value={name} onChange={onChangeName} />
      </FormControl>
      <Box textAlign="center">
        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
      </Box>
    </Stack>
  );
});
