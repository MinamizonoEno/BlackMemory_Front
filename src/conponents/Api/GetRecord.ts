import axios from "axios";

export const GetRecord = () => {
  const url = `https://blackmemoryapi.onrender.com/csrf`;
  axios
    .get(url, { withCredentials: true })
    .then(function (response) {
      console.log(response.data.csrf_token);
      console.log(response);
      document.cookie = response.data.csrf_token;
    })
    .catch(function (error) {
      console.log(error);
    });
};
