import axios from "axios";

export const GetRecord = () => {
  const url = "";
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
