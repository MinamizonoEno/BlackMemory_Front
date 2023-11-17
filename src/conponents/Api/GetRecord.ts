import axios from "axios";

export const GetRecord = () => {
  const url = "http://localhost:8080/works/20231112";
  axios
    .get(url, { withCredentials: true })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
