import axios from "axios";
//import { useContext } from "react";
//import { UserIdContext } from "../../provider/ContextProviders";
import { GetRecord } from "../Api/GetRecord";

export const PostSignup = (
  name: string,
  email: string,
  password: string,
  endpoint: string
) => {
  const url = `https://blackmemoryapi.onrender.com/${endpoint}`;
  GetRecord();
  const postData = {
    name: name,
    email: email,
    password: password,
    // date: "20231112",
    // start_at: "0821",
    // end_at: "2130",
    // hours: "1309",
    // content: "新年のあいさつ",
  };

  axios
    .post(url, Object.assign({}, postData), {
      headers: { "X-CSRF-TOKEN": `${document.cookie}` },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
