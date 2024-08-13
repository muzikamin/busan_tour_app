import { Box, Button } from "@chakra-ui/react";
import { GrLinkTop } from "react-icons/gr";

export const TopBtnBox = () => {
  const topScrollEvent = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={topScrollEvent}
      width="50px"
      height="50px"
      position="fixed"
      bottom="40px"
      right="40px"
      colorScheme="blue"
      zIndex="9999"
    >
      <GrLinkTop fontSize="50px" fontWeight="900" />
    </Button>
  );
};
