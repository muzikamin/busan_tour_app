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

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const _theme = extendBaseTheme({
  components,
  config,
  breakpoints,
  fonts: {
    heading: "Noto Sans KR",
    body: "Noto Sans KR",
  },
});

// 버튼, 모달창 컴포넌트 사용하기

export default _theme;
