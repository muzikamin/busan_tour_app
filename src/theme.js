import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  // 컬러모드 설정
}; // 환경설정

const { Button, Modal } = chakraTheme.components;

const components = {
  Button,
  Modal,
};

const _theme = extendBaseTheme({
  components,
  config,
  fonts: {
    heading: "Noto Sans KR",
    body: "Noto Sans KR",
  },
});

// 버튼, 모달창 컴포넌트 사용하기

export default _theme;
