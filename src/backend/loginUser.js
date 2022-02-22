// IMPORT MODULES
import axios from "axios";

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
      setState(res.data.user);
      setIsLoading(false);
      if (tokenSaved) {
        localStorage.setItem("userToken", res.data.token);
      }
    })
    .catch(() => {
      setError(true);
      setIsLoading(false);
    });
};
