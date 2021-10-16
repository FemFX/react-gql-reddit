import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface IWrapperProps {
  children: ReactNode;
  variant?: "small" | "regular";
}
const Wrapper: React.FC<IWrapperProps> = ({
  children,
  variant = "regular",
}): JSX.Element => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      mx="auto"
      w="100%"
      mt={8}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
