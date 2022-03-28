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
    .then((res) => {
      stateSetter(false);
      loader();
    })
    .catch(() => {
      stateSetter(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    });
};
