// IMPORT MODULES
import axios from "axios";

export const sendMessage = (
  url,
  token,
  data,
  stateSetter,
  loader,
  setError
) => {
  axios
    .post(`${url}?token=${token}`, data)
    .then(() => {
      stateSetter(false);
      loader();
    })
    .catch(() => {
      stateSetter(false);
      setError(true);
    });
};
