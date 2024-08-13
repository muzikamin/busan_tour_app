import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colorPoint, margin } from "../baseSet";
import { useState } from "react";
import { routes } from "../routes";

export const Header = () => {
  const [headerFix, setHeaderFix] = useState();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    // console.log(pageY);

    if (pageY >= 100) {
      setHeaderFix("rgba(255, 255, 255, 0.9)");
    } else {
      setHeaderFix("rgba(255, 255, 255, 0.6)");
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      zIndex="99"
      px={margin.lrm}
      w="100%"
      h="60px"
      justifyContent="center"
      alignItems="center"
      fontSize="20px"
      fontWeight="400"
      bgColor={headerFix}
    >
      <Box>
        <Link to={routes.home}>
          <Text fontWeight="900" color={colorPoint.point}>
            어디GO
          </Text>
        </Link>
      </Box>
      <Spacer />
      <Flex gap="50px">
        <Link to={routes.recommend}>
          <Text>추천명소</Text>
        </Link>
        <Link to={routes.search}>
          <Text>명소검색</Text>
        </Link>
      </Flex>
    </Flex>
  );
};
