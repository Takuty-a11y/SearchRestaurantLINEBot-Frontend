import { FC, memo } from "react";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { UserSettingAccount } from "../organisms/user/UserSettingAccount";
import { UserSettingProfile } from "../organisms/user/UserSettingProfile";
import { UserSettingCompany } from "../organisms/user/UserSettingCompany";

export const Setting: FC = memo(() => {
  return (
    <Flex align="center" justify="center" mt={8}>
      <Box
        bg="white"
        w={{ base: "md", md: "xl" }}
        p={4}
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h1" size="lg" textAlign="center" mb={6}>
          設定
        </Heading>
        <Tabs>
          <TabList>
            <Tab>プロフィール</Tab>
            <Tab>アカウント</Tab>
            <Tab>会社情報</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <UserSettingProfile />
            </TabPanel>
            <TabPanel>
              <UserSettingAccount />
            </TabPanel>
            <TabPanel>
              <UserSettingCompany />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
});
