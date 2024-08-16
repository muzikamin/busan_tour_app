import React, { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle";
import { _detailData, _detailFoodData, _detailThemeData } from "../api";
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
import { colorPoint, margin } from "../baseSet";
import { Location } from "./menu/Location";
import { useScrollTop } from "../lib/useScrollTop";

export const DetailFood = () => {
  useScrollTop();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: locationId } = useParams();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    (async () => {
      try {
        const { getFoodKr: data } = await _detailFoodData(locationId);

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
            <Box
              px={{
                xl: "140px",
                lg: "80px",
                base: "20px",
              }}
              margin="0 auto"
              h="100%"
              maxWidth="1400px"
              paddingTop="120px"
            >
              <Box
                display="flex"
                textAlign="center"
                flexDirection={{
                  xl: "row",
                  lg: "column",
                  base: "column",
                }}
              >
                <Box
                  w={{
                    xl: "50%",
                    lg: "100%",
                    base: "100%",
                  }}
                  h="500px"
                  mr="40px"
                >
                  <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    borderRadius="20px"
                    src={detailData.MAIN_IMG_NORMAL}
                    alt={detailData.TITLE}
                  />
                </Box>
                <Box
                  w={{
                    xl: "50%",
                    lg: "100%",
                    base: "100%",
                  }}
                  marginTop={{
                    xl: "20px",
                    lg: "40px",
                    base: "40px",
                  }}
                  marginBottom={{
                    xl: "20px",
                    lg: "40px",
                    base: "40px",
                  }}
                  textAlign="left"
                >
                  <Text
                    color={colorPoint.basecolor}
                    fontSize="36px"
                    fontWeight="700"
                    marginBottom="10px"
                  >
                    {detailData.TITLE}
                  </Text>
                  <Box
                    marginTop="20px"
                    marginBottom="20px"
                    borderBottom="1px solid black"
                  />
                  <Flex lineHeight="36px">
                    <Box
                      width="200px"
                      fontSize="18px"
                      fontWeight="900"
                      marginRight="50px"
                      // bg="red"
                    >
                      <Text>{detailData.ADDR1 ? "주소" : ""} </Text>
                      <Text>{detailData.RPRSNTV_MENU ? "메뉴" : ""} </Text>
                      <Text>{detailData.CNTCT_TEL ? "문의" : ""} </Text>
                      <Text>
                        {detailData.USAGE_DAY_WEEK_AND_TIME ? "운영시간" : ""}{" "}
                      </Text>
                    </Box>
                    <Box fontSize="18px" fontWeight="400">
                      <Text>{detailData.ADDR1 ? detailData.ADDR1 : ""}</Text>
                      <Text>
                        {detailData.RPRSNTV_MENU ? detailData.RPRSNTV_MENU : ""}
                      </Text>
                      <Text>
                        {detailData.CNTCT_TEL ? detailData.CNTCT_TEL : ""}
                      </Text>
                      <Text>
                        {detailData.USAGE_DAY_WEEK_AND_TIME
                          ? detailData.USAGE_DAY_WEEK_AND_TIME
                          : ""}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
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
