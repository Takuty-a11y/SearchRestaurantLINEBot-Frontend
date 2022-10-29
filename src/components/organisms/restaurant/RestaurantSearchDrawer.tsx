import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DrawerPlacement } from "../../atoms/button/SettingButton";
import { BudgetRadioCard } from "./BudgetRadioCard";
import { GenreCheckboxCard } from "./GenreCheckboxCard";
import { AreaSelectCard } from "./AreaSelectCard";
import { SortRadioCard } from "./SortRadioCard";
import { genreOptions } from "../../../Constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  placement: DrawerPlacement;
};

export const RestaurantSearchDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose, placement } = props;
  const [genreValue, setGenreValue] = useState("");
  const [largeArea, setLargeArea] = useState("");
  const [middleArea, setMiddleArea] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const onClickSearch = useCallback(() => {
    const query =
      `keyword=${params.get("keyword") ?? ""}&` +
      `genre=${genreValue ?? ""}&` +
      `large_area=${largeArea ?? ""}&` +
      `middle_area=${middleArea ?? ""}&` +
      `budget=${budgetValue ?? ""}&` +
      `sort=${sortValue ?? ""}`;
    const uri = encodeURI(`/?${query}`)
    navigate(uri);
    onClose();
  }, [
    params,
    genreValue,
    largeArea,
    middleArea,
    budgetValue,
    sortValue,
    navigate,
    onClose,
  ]);

  useEffect(() => {
    setGenreValue(params.get("genre") ?? "");
    setLargeArea(params.get("large_area") ?? "");
    setMiddleArea(params.get("middle_area") ?? "");
    setBudgetValue(params.get("budget") ?? "");
    setSortValue(params.get("sort") ?? "");
  }, [params]);

  return (
    <>
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderRadius="sm">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">詳細検索</DrawerHeader>

          <DrawerBody overflowY="scroll" px={0} py={3}>
            <Stack spacing="24px" h="xs">
              <Accordion allowMultiple>
                <Text fontWeight="bold" bgColor="gray.200" px={3} py={1}>
                  ジャンル
                </Text>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {genreValue
                          ? genreOptions
                              .filter((option) =>
                                genreValue.split(",").includes(option.code)
                              )
                              .map((item) => item.name)
                              .join(",")
                          : "指定なし"}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel borderTop="1px" borderTopColor="gray.200">
                    <GenreCheckboxCard
                      genreValue={genreValue}
                      setGenreValue={setGenreValue}
                    />
                  </AccordionPanel>
                </AccordionItem>
                <Text fontWeight="bold" bgColor="gray.200" px={3} py={1}>
                  場所
                </Text>
                <Box p={3}>
                  <AreaSelectCard
                    largeSelect={largeArea}
                    middleSelect={middleArea}
                    setLargeSelect={setLargeArea}
                    setMiddleSelect={setMiddleArea}
                  />
                </Box>
                <Text fontWeight="bold" bgColor="gray.200" px={3} py={1}>
                  予算
                </Text>
                <BudgetRadioCard
                  budgetValue={budgetValue}
                  setBudgetValue={setBudgetValue}
                />
                <Text fontWeight="bold" bgColor="gray.200" px={3} py={1}>
                  並び替え
                </Text>
                <SortRadioCard
                  sortValue={sortValue}
                  setSortValue={setSortValue}
                />
              </Accordion>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              閉じる
            </Button> */}
            <Button colorScheme="teal" onClick={onClickSearch} w="100%">
              適用
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
});
