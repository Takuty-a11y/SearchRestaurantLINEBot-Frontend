import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
} from "@chakra-ui/react";
import {MdHome, MdSettings, MdViewModule} from "react-icons/md"

import React, { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagemaent: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagemaent,
    onClickSetting,
  } = props;

  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader bg="gray.100" borderBottomWidth={1}>
            メニュー
          </DrawerHeader>
          <DrawerBody pl={0} pr={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome} justifyContent="flex-start">
              <Icon as={MdHome} w={5} h={5} ml="20px" mr="8px" />
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagemaent} justifyContent="flex-start">
              <Icon as={MdViewModule} w={5} h={5} ml="20px" mr="8px" />
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting} justifyContent="flex-start">
              <Icon as={MdSettings} w={5} h={5} ml="20px" mr="8px" />
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
