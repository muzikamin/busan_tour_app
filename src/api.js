const fetch = require("node-fetch");

const baseUrl =
  "http://apis.data.go.kr/6260000/AttractionService/getAttractionKr";

const serviceKey =
  "G47LjQsbye2mab%2BmzvLhCkT6QWR4fSIKUIJe1sRLo8Y0J28Jo5ES5f%2Bv8KPOISJjO1VIBQhEmDVIef0WSnS1IQ%3D%3D";

const options = {
  method: "GET",
  headers: {
    Accept: "application / json",
  },
};

export const url =
  baseUrl + `?serviceKey=${serviceKey}&numOfRows=999&pageNo=1&resultType=json`;

export const reData = () => fetch(url, options).then((res) => res.json());
