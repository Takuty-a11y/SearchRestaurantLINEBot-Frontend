import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

import { useLoginUser } from "../../../hooks/useLoginUser";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useMessage } from "../../../hooks/useMessage";

export const UserSettingAccount: FC = memo(() => {
  const { loginUser, setLoginUser } = useLoginUser();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const { showMessage } = useMessage();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onChangeWebsite = (e: ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.target.value);
  };
  const onChangeZipcode = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };
  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };
  const onChangeSuite = (e: ChangeEvent<HTMLInputElement>) => {
    setSuite(e.target.value);
  };
  const onClickUpdate = () => {
    if (loginUser == null) {
      return;
    }
    const newUser = { ...loginUser };
    newUser.email = email;
    newUser.phone = phone;
    newUser.website = website;
    newUser.address.zipcode = zipcode;
    newUser.address.city = city;
    newUser.address.street = street;
    newUser.address.suite = suite;
    setLoginUser(newUser);
    showMessage({ title: "更新しました", status: "success" });
  };

  useEffect(() => {
    setEmail(loginUser?.email ?? "");
    setPhone(loginUser?.phone ?? "");
    setWebsite(loginUser?.website ?? "");
    setZipcode(loginUser?.address.zipcode ?? "");
    setCity(loginUser?.address.city ?? "");
    setStreet(loginUser?.address.street ?? "");
    setSuite(loginUser?.address.suite ?? "");
  }, [loginUser]);

  return (
    <Stack spacing={4}>
      <Heading as="h2" size="md">
        基本情報
      </Heading>
      <Stack spacing={2} pl={2}>
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input value={email} onChange={onChangeEmail} />
        </FormControl>
        <FormControl>
          <FormLabel>電話番号</FormLabel>
          <Input value={phone} onChange={onChangePhone} />
        </FormControl>
        <FormControl>
          <FormLabel>Webサイト</FormLabel>
          <Input value={website} onChange={onChangeWebsite} />
        </FormControl>
      </Stack>
      <Heading as="h2" size="md">
        住所
      </Heading>
      <Stack spacing={2} pl={2}>
        <FormControl>
          <FormLabel>郵便番号</FormLabel>
          <Input value={zipcode} onChange={onChangeZipcode} />
        </FormControl>
        <FormControl>
          <FormLabel>市町村</FormLabel>
          <Input value={city} onChange={onChangeCity} />
        </FormControl>
        <FormControl>
          <FormLabel>番地</FormLabel>
          <Input value={street} onChange={onChangeStreet} />
        </FormControl>
        <FormControl>
          <FormLabel>建物名</FormLabel>
          <Input value={suite} onChange={onChangeSuite} />
        </FormControl>
      </Stack>
      <Box textAlign="center">
        <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
      </Box>
    </Stack>
  );
});
