// IMPORT MODULES
import axios from "axios";
import { getUserInfo } from "./getUserInfo";

// URL
import { destination } from "../destinationUrl";

const getUrl = destination + "/me";

export const loginUser = (
  url,
  formData,
  setState,
  tokenSaved,
  setError,
  setIsLoading
) => {
  axios
    .post(url, formData)
    .then((res) => {
      // setState(res.data.user);
      getUserInfo(getUrl, res.data.token, setState, setIsLoading);
      if (tokenSaved) {
        localStorage.setItem("userToken", res.data.token);
      }
    })
    .catch((err) => {
      setError(err.response.data.error);
      setIsLoading(false);
    });
};
