import axios from "axios";

export const forgotPassword = (url, data, setState, unsetState) => {
  axios
    .post(url, data)
    .then((res) => {
      setState(res);
    })
    .catch(() => {
      unsetState(false);
    });
};
