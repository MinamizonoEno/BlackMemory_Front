import axios from "axios";
//import { useContext } from "react";
//import { UserIdContext } from "../../provider/ContextProviders";

export const PostLogin = (
  email: string,
  password: string,
  endpoint: string
) => {
  const url = `https://blackmemoryapi.onrender.com/${endpoint}`;
  //const [id] = useContext(UserIdContext);

  const postData = {
    //id: `${id}`,
    name: name,
    email: email,
    password: password,
    /*date: `${date}`,
    start_at: `${startAt}`,
    end_at: `${endAt}`,
    hours: `${hours}`,
    content: `${content}`,*/
    // date: "20231112",
    // start_at: "0821",
    // end_at: "2130",
    // hours: "1309",
    // content: "新年のあいさつ",
  };

  axios
    .post(url, Object.assign({}, postData), { withCredentials: true })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
