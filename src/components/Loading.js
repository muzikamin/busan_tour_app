import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { FadeLoader } from "react-spinners";
import { colorPoint } from "../baseSet";

export const Loading = () => {
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter p="1" axis="both">
        <FadeLoader color={colorPoint.point} />
      </AbsoluteCenter>
    </Box>
  );
};
