import { useEffect, useState } from "react";
import { PageTitle } from "../components/PageTitle";
import { _detailData } from "../api";
import { Loading } from "../components/Loading";
import { Box, Img } from "@chakra-ui/react";

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { getAttractionKr: data } = await _detailData(255);

        setDetailData(...data.item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);

  return (
    <>
      <PageTitle title="정보" />
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <Box>
            <Img src="#" alt="#" />
            <h3>{detailData.TITLE}</h3>
          </Box>
        )}
      </div>
    </>
  );
};
