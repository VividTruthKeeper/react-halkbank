import axios from "axios";
import { destination } from "../destinationUrl";

export const restore = (data, setLoader, setError, onSuccess) => {
  axios
    .post(`${destination}/restore`, data)
    .then((res) => {
      if (res.data.data === "success") {
        setLoader(false);
        onSuccess();
      } else {
        setError(true);
      }
    })
    .catch((err) => {
      setLoader(false);
      setError(true);
    });
};

export const reset = (data, setLoader, setError, onSuccess) => {
  axios
    .post(`${destination}/reset`, data)
    .then((res) => {
      if (res.data.data === "success") {
        setLoader(false);
        onSuccess();
      } else {
        setError(true);
      }
    })
    .catch(() => {
      setLoader(false);
      setError(true);
    });
};
