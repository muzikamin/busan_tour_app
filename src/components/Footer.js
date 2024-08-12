import { Box } from "@chakra-ui/react";
import { colorPoint } from "../baseSet";

export const Footer = () => {
  return (
    <Box
      width="100%"
      bg={colorPoint.pointopa}
      textAlign="center"
      paddingTop="100px"
      paddingBottom="50px"
    >
      &copy; Minzy Kim | 2024
    </Box>
  );
};
