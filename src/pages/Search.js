import { Form, Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Image,
  Input,
  position,
  Stack,
  styled,
  Text,
} from "@chakra-ui/react";
import {
  _detailData,
  reDataSearch,
  SearchfoodData,
  SearchthemeData,
} from "../api";
import { useEffect, useState } from "react";
import { colorPoint } from "../baseSet";
import { Loading } from "../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Search = () => {
  const [fordata, setForData] = useState();
  const [foodData, setFoodData] = useState();
  const [themeData, setThemeData] = useState();

  const [dataResult, setDataresult] = useState();
  const [foodResult, setFoodresult] = useState();
  const [themeResult, setThemeresult] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const { getAttractionKr: data } = await reDataSearch();
        const { getFoodKr: FoodData } = await SearchfoodData();
        const { getRecommendedKr: themeData } = await SearchthemeData();

        setForData(data.item);
        setFoodData(FoodData.item);
        setThemeData(themeData.item);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSearchResult = (data) => {
    const { keyword } = data; //사용자가 넣은 값
    const result = fordata.filter((v) => v.MAIN_TITLE.includes(keyword));
    const foodResult = foodData.filter((v) => v.MAIN_TITLE.includes(keyword));
    const themeResult = themeData.filter((v) => v.MAIN_TITLE.includes(keyword));

    setDataresult(result);
    setFoodresult(foodResult);
    setThemeresult(themeResult);
  };

  console.log(dataResult);

  return (
    <>
      <div style={{ padding: "140px" }}>
        <PageTitle title="검색하기" />
        <form
          style={{ position: "relative" }}
          onSubmit={handleSubmit(onSearchResult)}
        >
          <input
            style={{
              all: "unset",
              width: "100%",
              height: "50px",
              borderRadius: "1px solid #555",
              padding: "0 10px",
              fontSize: "20px",
              borderBottom: `1px solid ${colorPoint.middleColor}`,
            }}
            {...register("keyword", {
              required: "검색내용을 입력해 주세요",
            })}
            type="text"
            placeholder="명소, 테마, 음식..."
          />
          <Button
            colorScheme="blue"
            style={{
              position: "absolute",
              padding: "15px",
              top: "10px",
              right: "-20px",
              fontSize: "20px",
              cursor: "pointer",
              // paddingBottom: "10px",
              // backgroundColor: "red",
            }}
          >
            <FiSearch />
          </Button>
        </form>
        <Text style={{ color: "red", marginTop: "10px" }}>
          {errors?.keyword?.message}
        </Text>
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {dataResult && (
                <Box>
                  {dataResult?.length === 0 ? (
                    "검색결과 없음"
                  ) : (
                    <>
                      <Box style={{ padding: "40px", position: "relative" }}>
                        <Text
                          fontSize="26px"
                          fontWeight="700"
                          marginBottom="14px"
                          color={colorPoint.middleColor}
                        >
                          부산여행
                        </Text>
                        <Swiper
                          modules={[Pagination]}
                          spaceBetween="15px"
                          breakpoints={{
                            1680: {
                              slidesPerView: 4.7,
                            },
                          }}
                          loop={true}
                          pagination={{ clickable: true }}
                        >
                          {dataResult.map((data) => (
                            <SwiperSlide key={data.UC_SEQ}>
                              <Link to={`/detail/${data.UC_SEQ}`}>
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
                                      fontSize="17px"
                                      lineHeight="28px"
                                      fontWeight={700}
                                      mb={1}
                                    >
                                      {data.MAIN_TITLE}
                                    </Text>
                                  </Box>
                                </Box>
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <Text style={{ position: "absolute", right: "30px" }}>
                          더보기
                        </Text>
                      </Box>
                    </>
                  )}
                </Box>
              )}
              {foodResult && (
                <Box>
                  {foodResult?.length === 0 ? (
                    "검색결과 없음"
                  ) : (
                    <>
                      <Box style={{ padding: "40px", position: "relative" }}>
                        <Text
                          fontSize="26px"
                          fontWeight="700"
                          marginBottom="14px"
                          color={colorPoint.middleColor}
                        >
                          푸드
                        </Text>
                        <Swiper
                          modules={[Pagination]}
                          spaceBetween="15px"
                          breakpoints={{
                            1680: {
                              slidesPerView: 4.7,
                            },
                          }}
                          loop={true}
                        >
                          {foodResult.map((data) => (
                            <SwiperSlide key={data.UC_SEQ}>
                              <Link to={`/detail/${data.UC_SEQ}`}>
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
                                      fontSize="17px"
                                      lineHeight="28px"
                                      fontWeight={700}
                                      mb={1}
                                    >
                                      {data.MAIN_TITLE}
                                    </Text>
                                  </Box>
                                </Box>
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <Text style={{ position: "absolute", right: "30px" }}>
                          더보기
                        </Text>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </>
          )}
          {themeResult && (
            <Box>
              {themeResult?.length === 0 ? (
                "검색결과 없음"
              ) : (
                <>
                  <Box style={{ padding: "40px", position: "relative" }}>
                    <Text
                      fontSize="26px"
                      fontWeight="700"
                      marginBottom="14px"
                      color={colorPoint.middleColor}
                    >
                      테마여행
                    </Text>
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween="15px"
                      breakpoints={{
                        1680: {
                          slidesPerView: 4.7,
                        },
                      }}
                      loop={true}
                      pagination={{ clickable: true }}
                    >
                      {themeResult.map((data) => (
                        <SwiperSlide key={data.UC_SEQ}>
                          <Link to={`/detail/${data.UC_SEQ}`}>
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
                                  fontSize="17px"
                                  lineHeight="28px"
                                  fontWeight={700}
                                  mb={1}
                                >
                                  {data.MAIN_TITLE}
                                </Text>
                              </Box>
                            </Box>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Text style={{ position: "absolute", right: "30px" }}>
                      더보기
                    </Text>
                  </Box>
                </>
              )}
            </Box>
          )}
        </>
      </div>
    </>
  );
};
