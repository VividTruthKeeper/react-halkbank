// IMPORT MODULES
import axios from "axios";

export const sendMessage = (url, token, data, stateSetter, loader) => {
  axios
    .post(`${url}?token=${token}`, data)
    .then((res) => {
      stateSetter(false);
      loader();
    })
    .catch(() => {
      stateSetter(false);
    });
};
