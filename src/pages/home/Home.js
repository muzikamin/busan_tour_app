import { useEffect, useState } from "react";
import { foodData, reData, reDataImg, themeData } from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
import { Box, Image, Text } from "@chakra-ui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { colorPoint, margin } from "../../baseSet";
import { Autoplay, Pagination, Zoom } from "swiper/modules";
import { Link } from "react-router-dom";

export const Home = () => {
  const [fordata, setForData] = useState();
  const [FoodData, setFoodData] = useState();
  const [themeinData, setThemeData] = useState();

  const [fordataImg, setForDataImg] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { getAttractionKr: data } = await reData();
        const { getAttractionKr: dataImg } = await reDataImg();

        const { getFoodKr: FoodData } = await foodData();

        const { getRecommendedKr: inthemeData } = await themeData();

        setForData(data.item);
        setFoodData(FoodData.item);
        setThemeData(inthemeData.item);

        setForDataImg(dataImg.item);
        // setRandomNum(FoodrandomNumber);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(fordata);
  // console.log(fordataImg);
  // console.log(FoodData);
  // console.log(themeinData);

  // console.log(fordata[1].TITLE); 이거는 왜 안 됐더라...
  // console.log(randomNum);

  return (
    <>
      <PageTitle title="HOME" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {themeinData.map((data) => (
              <SwiperSlide key={data.UC_SEQ}>
                <Link to={`/detailTheme/${data.UC_SEQ}`}>
                  <Box w="100%" h="80vh" position="relative">
                    <Box
                      w="100%"
                      h="100%"
                      position="absolute"
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 52%)"
                    />
                    <Box position="absolute" left={margin.lrm} bottom="100px">
                      <Text fontSize={40} fontWeight={700} mb={1}>
                        {data.TITLE}
                      </Text>
                      <Text fontSize={18} fontWeight={400} opacity={0.8}>
                        {data.SUBTITLE}
                      </Text>
                    </Box>
                    <Image
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      src={data.MAIN_IMG_NORMAL}
                      alt={data.TITLE}
                    />
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* -----------------메인배너--------------------- */}
          <Box marginTop="100px" ml={margin.lrm} marginBottom="100px">
            <Text fontSize="32px" fontWeight="700" mb="10px">
              부산 어디로 GO?
            </Text>
            <Text mb={10} fontSize="18px">
              부산의 여행지를 추천해드려요
            </Text>
            <Swiper
              breakpoints={{
                460: {
                  slidesPerView: 1.7,
                },
                768: {
                  slidesPerView: 2.7,
                },
                1024: {
                  slidesPerView: 3.7,
                },
                1680: {
                  slidesPerView: 4.7,
                },
              }}
              modules={[Autoplay, Pagination]}
              spaceBetween="15px"
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              {fordata.map((data) => (
                <SwiperSlide key={data.UC_SEQ}>
                  <Box w="100%">
                    <Link to={`/detail/${data.UC_SEQ}`}>
                      <Image
                        borderRadius="10px"
                        h="100%"
                        objectFit="cover"
                        src={data.MAIN_IMG_NORMAL}
                        alt={data.TITLE}
                      />
                      <Box mt="15px">
                        <Text
                          fontSize="20px"
                          lineHeight="28px"
                          fontWeight={700}
                          mb={1}
                        >
                          {data.TITLE}
                        </Text>
                        <Text fontSize="16px" fontWeight={400} opacity={0.8}>
                          {data.SUBTITLE}
                        </Text>
                      </Box>
                    </Link>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* -----------------첫번째 섹션--------------------- */}
          <Box bg={colorPoint.pointopa} paddingTop="10px" paddingBottom="10px">
            <Box marginTop="100px" ml={margin.lrm} marginBottom="100px">
              <Text fontSize="32px" fontWeight="700" mb="10px">
                부산 맛집으로 GO?
              </Text>
              <Text mb={10} fontSize="18px">
                부산의 맛집을 추천해드려요
              </Text>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween="15px"
                breakpoints={{
                  460: {
                    slidesPerView: 1.7,
                  },
                  768: {
                    slidesPerView: 2.7,
                  },
                  1024: {
                    slidesPerView: 3.7,
                  },
                  1680: {
                    slidesPerView: 4.7,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                {FoodData.map((data) => (
                  <SwiperSlide key={data.UC_SEQ}>
                    <Link to={`/detailfood/${data.UC_SEQ}`}>
                      <Box w="100%">
                        <Image
                          borderRadius="10px"
                          h="100%"
                          objectFit="cover"
                          src={data.MAIN_IMG_NORMAL}
                          alt={data.TITLE}
                        />
                        <Box mt="15px">
                          <Text
                            fontSize="20px"
                            lineHeight="28px"
                            fontWeight={700}
                            mb={1}
                          >
                            {data.TITLE}
                          </Text>
                          <Text fontSize="16px" fontWeight={400} opacity={0.8}>
                            {data.SUBTITLE}
                          </Text>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          {/* -----------------두번째 섹션--------------------- */}
          <Box marginTop="100px" ml={margin.lrm} marginBottom="100px">
            <Text fontSize="32px" fontWeight="700" mb="10px">
              부산 테마여행 GO?
            </Text>
            <Text mb={10} fontSize="18px">
              부산의 테마여행을 추천해드려요
            </Text>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween="15px"
              breakpoints={{
                460: {
                  slidesPerView: 1.7,
                },
                768: {
                  slidesPerView: 2.7,
                },
                1024: {
                  slidesPerView: 3.7,
                },
                1680: {
                  slidesPerView: 4.7,
                },
              }}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              {themeinData.map((data) => (
                <SwiperSlide key={data.UC_SEQ}>
                  <Link to={`/detailtheme/${data.UC_SEQ}`}>
                    <Box w="100%">
                      <Image
                        borderRadius="10px"
                        h="100%"
                        objectFit="cover"
                        src={data.MAIN_IMG_NORMAL}
                        alt={data.TITLE}
                      />
                      <Box mt="15px">
                        <Text
                          fontSize="20px"
                          lineHeight="28px"
                          fontWeight={700}
                          mb={1}
                        >
                          {data.TITLE}
                        </Text>
                        <Text fontSize="16px" fontWeight={400} opacity={0.8}>
                          {data.SUBTITLE}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          {/* -----------------세번째 섹션--------------------- */}
        </>
      )}
    </>
  );
};
