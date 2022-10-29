import { FC, memo } from "react";
import {
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Restaurant } from "../../../types/api/restaurant";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  restaurant: Restaurant | null;
};

export const RestaurantDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, restaurant } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader borderBottom='1px' borderColor='gray.200'>店舗詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY='scroll' pl={3} pr={0} py={3}>
            <Stack spacing={3} h='sm'>
              <FormControl>
                <FormLabel bgColor="teal.200" px={3} py={1}>店名</FormLabel>
                <FormLabel px={3}>{restaurant?.name}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel bgColor="teal.200" px={3} py={1}>ジャンル</FormLabel>
                <FormLabel px={3}>{restaurant?.genre.catch}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel bgColor="teal.200" px={3} py={1}>住所</FormLabel>
                <FormLabel px={3}>{restaurant?.address}</FormLabel>
                <FormLabel px={3}>{`最寄駅：${restaurant?.station_name}駅`}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel bgColor="teal.200" px={3} py={1}>営業時間</FormLabel>
                <FormLabel px={3}>{restaurant?.open}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel bgColor="teal.200" px={3} py={1}>平均予算</FormLabel>
                <FormLabel px={3}>{restaurant?.budget.average}</FormLabel>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter borderTop='1px' borderColor='gray.200'>
            <HStack>
              <PrimaryButton href={restaurant?.urls.pc}>
                ホットペッパー
              </PrimaryButton>
              <PrimaryButton href={`https://www.google.com/maps?q=${restaurant?.lat},${restaurant?.lng}`}>
                地図
              </PrimaryButton>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
