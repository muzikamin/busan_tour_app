import { useEffect, useState } from "react";
import { reData, url } from "../../api";

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { getAttractionKr } = await reData();
        setData(getAttractionKr.item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(data);

  return <div>홈입니당</div>;
};
