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
import { colorPoint, margin } from "../baseSet";
import { Location } from "./menu/Location";
import { useScrollTop } from "../lib/useScrollTop";

export const DetailTheme = () => {
  useScrollTop();
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id: locationId } = useParams();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    (async () => {
      try {
        const { getRecommendedKr: data } = await _detailThemeData(locationId);

        setIsLoading(false);
        setDetailData(...data.item);
        setIsLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const oldText = detailData && detailData.ITEMCNTNTS;
  const newText = oldText?.replace(/(<([^>]+)>)/gi, "");

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
                lg: "100px",
                base: "80px",
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
                    fontSize={{
                      xl: "36px",
                      lg: "30px",
                      base: "30px",
                    }}
                    fontWeight="700"
                    marginBottom="10px"
                  >
                    {detailData.TITLE}
                  </Text>
                  <Text
                    fontSize={{
                      xl: "24px",
                      lg: "20px",
                      base: "20px",
                    }}
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
                  {newText}
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
