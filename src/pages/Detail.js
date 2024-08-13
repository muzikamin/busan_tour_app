import React, { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle";
import { _detailData, _detailThemeData } from "../api";
import { Loading } from "../components/Loading";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { colorPoint } from "../baseSet";
import { Location } from "./menu/Location";

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: locationId } = useParams();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    (async () => {
      try {
        const { getAttractionKr: data } = await _detailData(locationId);

        setIsLoading(false);
        setDetailData(...data.item);
        setIsLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PageTitle title={detailData.TITLE} />
            <Box w="100%" h="100%" padding="120px">
              <Box display="flex" alignItems="center" textAlign="center">
                <Flex>
                  <Box w="50%" h="500px" mr="40px">
                    <Image
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      borderRadius="20px"
                      src={detailData.MAIN_IMG_NORMAL}
                      alt={detailData.TITLE}
                    />
                  </Box>
                  <Box w="50%" textAlign="left">
                    <Text
                      color={colorPoint.basecolor}
                      fontSize="36px"
                      fontWeight="700"
                      marginBottom="10px"
                    >
                      {detailData.TITLE}
                    </Text>
                    <Text
                      fontSize="24px"
                      fontWeight="400"
                      marginBottom="16px"
                      opacity="0.7"
                    >
                      {detailData.SUBTITLE}
                    </Text>
                    <Box
                      marginTop="20px"
                      marginBottom="20px"
                      borderBottom="1px solid black"
                    />
                    <Flex lineHeight="36px">
                      <Box
                        width="400px"
                        fontSize="18px"
                        fontWeight="900"
                        marginRight="50px"
                        // bg="red"
                      >
                        <Text>{detailData.ADDR1 ? "주소" : ""} </Text>
                        <Text>{detailData.CATE2_NM ? "테마" : ""} </Text>
                        <Text>{detailData.CNTCT_TEL ? "문의" : ""} </Text>
                        <Text>{detailData.TRFC_INFO ? "대중교통" : ""} </Text>
                      </Box>
                      <Box fontSize="18px" fontWeight="400">
                        <Text>{detailData.ADDR1 ? detailData.ADDR1 : ""}</Text>
                        <Text>
                          {detailData.CATE2_NM ? detailData.CATE2_NM : ""}
                        </Text>
                        <Text>
                          {detailData.CNTCT_TEL ? detailData.CNTCT_TEL : ""}
                        </Text>
                        <Text>
                          {detailData.TRFC_INFO ? detailData.TRFC_INFO : ""}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              <Text
                marginTop="30px"
                fontSize="18px"
                textAlign="left"
                fontWeight="400"
                marginBottom="16px"
                lineHeight="30px"
              >
                <Collapse startingHeight={60} in={show}>
                  {detailData.ITEMCNTNTS}
                </Collapse>
                <Button size="sm" onClick={handleToggle} mt="1rem">
                  {show ? "닫기" : "더 알아보기"}
                </Button>
              </Text>
            </Box>

            <Location lat={detailData.LAT} lng={detailData.LNG} />
          </>
        )}
      </div>
    </>
  );
};
