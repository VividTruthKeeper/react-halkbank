// IMPORT MODULES
import axios from "axios";

export const sendMessage = (url, token, data, stateSetter) => {
  axios
    .post(`${url}?token=${token}`, data)
    .then((res) => {
      stateSetter(false);
    })
    .catch(() => {
      {
        stateSetter(false);
      }
    });
};
