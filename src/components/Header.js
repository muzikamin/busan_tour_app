import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { AiOutlineLogin } from "react-icons/ai";

export const Header = () => {
  return (
    <Flex
      px="100px"
      w="100%"
      h="60px"
      bg="red"
      justifyContent="center"
      alignItems="center"
      fontSize="20px"
      fontWeight="700"
    >
      <Box>
        <Link to={routes.home}>어디GO</Link>
      </Box>
      <Spacer />
      <Flex gap="50px">
        <Link to={routes.recommend}>
          <Text>추천명소</Text>
        </Link>
        <Link to={routes.location}>
          <Text>구별명소</Text>
        </Link>
        <Link to={routes.search}>
          <Text>명소검색</Text>
        </Link>
        <Box>
          <Link to={routes.login}>
            <AiOutlineLogin fontSize="30px" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
