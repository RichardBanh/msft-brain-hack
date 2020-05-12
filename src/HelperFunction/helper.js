import axios from "axios";
import { API, password, email } from "../Config/config";

export function randomWhole(x, y) {
  const random = Math.floor(Math.random() * (+x - +y)) + +y;
  return random;
}

export function isolatingStrings(object) {
  const emptyArray = Object.values(object);
  return emptyArray;
}

export function filterIt(arr, searchKey) {
  return arr.filter(function (obj) {
    return Object.keys(obj).some(function (key) {
      return obj[key].includes(searchKey);
    });
  });
}

export const dataCall = async (method, url, data) => {
  await axios({
    method: method,
    url: API + url,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: data,
  })
    .then((res) => {
      console.log(document.cookie);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};

// export function searchObj(obj, query) {
//   Object.keys(table).reduce(function(accumulator, currentValue) {
//     if (table[currentValue].col3==='C') accumulator[currentValue] = table[currentValue];
//     return accumulator;
//   }, {});

// }
