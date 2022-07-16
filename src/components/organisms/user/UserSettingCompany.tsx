import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Box, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useMessage } from "../../../hooks/useMessage";

export const UserSettingCompany: FC = memo(() => {
  const { loginUser, setLoginUser } = useLoginUser();
  const [name, setName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const { showMessage } = useMessage();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeCatchPhrase = (e: ChangeEvent<HTMLInputElement>) => {
    setCatchPhrase(e.target.value);
  };
  const onChangeBs = (e: ChangeEvent<HTMLInputElement>) => {
    setBs(e.target.value);
  };

  const onClickUpdate = () => {
    if (loginUser == null) {
      return;
    }
    const newUser = { ...loginUser };
    newUser.company.name = name;
    newUser.company.catchPhrase = catchPhrase;
    newUser.company.bs = bs;
    setLoginUser(newUser);
    showMessage({ title: "更新しました", status: "success" });
  };

  useEffect(() => {
    setName(loginUser?.company.name ?? "");
    setCatchPhrase(loginUser?.company.catchPhrase ?? "");
    setBs(loginUser?.company.bs ?? "");
  }, [loginUser]);

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>会社名</FormLabel>
        <Input value={name} onChange={onChangeName} />
      </FormControl>
      <FormControl>
        <FormLabel>キャッチフレーズ</FormLabel>
        <Input value={catchPhrase} onChange={onChangeCatchPhrase} />
      </FormControl>
      <FormControl>
        <FormLabel>BS</FormLabel>
        <Input value={bs} onChange={onChangeBs} />
      </FormControl>
      <Box textAlign="center">
        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
      </Box>
    </Stack>
  );
});
