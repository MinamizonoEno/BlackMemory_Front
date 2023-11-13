import axios from "axios";
import { useContext } from "react";
import { UserIdContext } from "../../provider/ContextProviders";

export const PostApi = (/*Props*/) => {
  const url = "";
  const [id] = useContext(UserIdContext);

  const postData = {
    id: `${id}`,
    /*date: `${date}`,
    start_at: `${startAt}`,
    end_at: `${endAt}`,
    hours: `${hours}`,
    content: `${content}`,*/
  };

  axios
    .post(url, Object.assign({}, postData))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
