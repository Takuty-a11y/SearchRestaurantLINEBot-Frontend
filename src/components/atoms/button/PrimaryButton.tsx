import { FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, href, disabled = false, loading = false } = props;
  return href ? (
    <Button
      as="a"
      rightIcon={<ExternalLinkIcon />}
      href={href}
      target="_blank"
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
    >
      {children}
    </Button>
  ) : (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
      isLoading={loading}
      loadingText={`${children}中`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
