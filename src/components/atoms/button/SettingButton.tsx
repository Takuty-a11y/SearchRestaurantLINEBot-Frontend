import { FC, memo, useCallback, useState } from "react";
import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { VscSettings } from "react-icons/vsc";
import { RestaurantSearchDrawer } from "../../organisms/restaurant/RestaurantSearchDrawer";

export type DrawerPlacement = "right" | "bottom";

export const SettingButton: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<DrawerPlacement>("bottom");
  const onClickOpen = useCallback((position: DrawerPlacement) => {
    setPlacement(position);
    onOpen();
  }, [onOpen]);

  return (
    <>
      <IconButton
        aria-label="Search restaurant"
        size="md"
        borderRadius="full"
        display={{ base: "flex", md: "none"}}
        onClick={() => onClickOpen("bottom")}
        icon={<VscSettings size="25px" />}
        bgColor="teal.300"
        color="white"
      />
      <Button
        aria-label="Search restaurant"
        borderRadius="xl"
        display={{ base: "none", md: "flex"}}
        onClick={() => onClickOpen("right")}
        bgColor="teal.300"
        color="white"
      >
        詳細検索
      </Button>
      <RestaurantSearchDrawer
        isOpen={isOpen}
        onClose={onClose}
        placement={placement}
      />
    </>
  );
});
