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


///should properly return something

export const dataCall = async (method, url, data, report) => {
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
      console.log(res);
      report.success = true;
      report.data = res.data;
      console.log(report);
    })
    .catch((error) => {
      if (error.response === undefined) {
        console.log(error);
      } else {
        console.log(error.response.data.whathappened);
        report.error = error.response.data.whathappened;
      }
    });
};
