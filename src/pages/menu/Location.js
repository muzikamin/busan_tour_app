import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const { kakao } = window;

export const Location = ({ lat, lng }) => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커가 표시 될 위치
    const markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <Flex marginBottom="30px" alignItems="center" justifyContent="center">
      <div
        id="map"
        style={{ width: "70%", height: "600px", margin: "80px 0" }}
      ></div>
    </Flex>
  );
};
