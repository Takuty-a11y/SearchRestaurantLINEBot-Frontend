import { FC, memo, useCallback } from "react";
import {
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdHome, MdSettings, MdViewModule } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

export const MenuIconButton: FC = memo(() => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const onClickHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const onClickUserManagemaent = useCallback(() => {
    navigate("/home/user_management");
  }, [navigate]);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting");
  }, [navigate]);
  const onClickLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Menu>
      <MenuButton w={10}>
        <Image
          borderRadius="full"
          boxSize={10}
          src="https://source.unsplash.com/random"
          alt="プロフィール画像"
        />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdHome />} onClick={onClickHome}>
          Todoリスト
        </MenuItem>
        <MenuItem icon={<MdViewModule />} onClick={onClickUserManagemaent}>
          ユーザー一覧
        </MenuItem>
        <MenuItem icon={<MdSettings />} onClick={onClickSetting}>
          設定
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<MdSettings />} onClick={onClickLogout}>
          ログアウト
        </MenuItem>
      </MenuList>
    </Menu>
  );
});
