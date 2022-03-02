// IMPORT MODULES
import axios from "axios";

export const getUserInfo = (url, userToken, setState, setLoaderActive) => {
  axios
    .get(`${url}?token=${userToken}`)
    .then((res, err) => {
      setLoaderActive(false);
      if (err) {
        return `Failed to fetch user info: ${err}`;
      }
      if (setState) {
        setState(res.data.me);
      } else {
        return res.data.me;
      }
    })
    .catch(() => {
      setLoaderActive(false);
    });
};
