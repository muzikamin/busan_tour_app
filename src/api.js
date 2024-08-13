const fetch = require("node-fetch");

const baseUrl =
  "http://apis.data.go.kr/6260000/AttractionService/getAttractionKr";

const foodBaseUrl = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";

const themeBaseUrl =
  "https://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr";

const serviceKey =
  "G47LjQsbye2mab%2BmzvLhCkT6QWR4fSIKUIJe1sRLo8Y0J28Jo5ES5f%2Bv8KPOISJjO1VIBQhEmDVIef0WSnS1IQ%3D%3D";

const options = {
  method: "GET",
  headers: {
    Accept: "application / json",
  },
};

const url =
  baseUrl + `?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&resultType=json`;

const FoodUrl =
  foodBaseUrl +
  `?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&resultType=json`;

const themeUrl =
  themeBaseUrl +
  `?serviceKey=${serviceKey}&numOfRows=20&pageNo=1&resultType=json`;

const urlImg = (num) =>
  baseUrl +
  `?serviceKey=${serviceKey}&numOfRows=10
&pageNo=${num}&resultType=json`;

const randomNumber = Math.floor(Math.random() * 10);

export const reData = () => fetch(url, options).then((res) => res.json());
export const foodData = () => fetch(FoodUrl, options).then((res) => res.json());
export const themeData = () =>
  fetch(themeUrl, options).then((res) => res.json());

export const _detailData = (id) =>
  fetch(url + `&UC_SEQ=${id}`, options).then((res) => res.json());

export const _detailFoodData = (id) =>
  fetch(FoodUrl + `&UC_SEQ=${id}`, options).then((res) => res.json());

export const _detailThemeData = (id) =>
  fetch(themeUrl + `&UC_SEQ=${id}`, options).then((res) => res.json());

export const reDataImg = () =>
  fetch(urlImg(randomNumber), options).then((res) => res.json());

// 342ca894cb416bd18a5959b63754342c
