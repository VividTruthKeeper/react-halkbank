// IMPORT MODULES
import axios from "axios";

export const loginUser = (url, formData, setState, tokenSaved) => {
  axios.post(url, formData).then((res, err) => {
    setState(res.data.user);
    if (tokenSaved) {
      localStorage.setItem("userToken", res.data.token);
    }
  });
};
