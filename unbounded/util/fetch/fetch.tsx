import axios from "axios";

export const getData = (url: string) => {
  axios(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => {
    return res.data;
  });
};
