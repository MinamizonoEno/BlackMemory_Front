import axios from "axios";
import { useContext } from "react";
import {
  UserIdContext,
  DateContext,
  StartAtContext,
  EndAtContext,
  HoursContext,
  ContentContext,
} from "../../provider/ContextProviders";

const url = "";

export const PostApi = () => {
  const [id] = useContext(UserIdContext);
  const [date] = useContext(DateContext);
  const [startAt] = useContext(StartAtContext);
  const [endAt] = useContext(EndAtContext);
  const [hours] = useContext(HoursContext);
  const [content] = useContext(ContentContext);

  const postData = {
    id: `${id}`,
    date: `${date}`,
    start_at: `${startAt}`,
    end_at: `${endAt}`,
    hours: `${hours}`,
    content: `${content}`,
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
