// IMPORT MODULES
import axios from "axios";

export const changePassword = (
  url,
  formData,
  setState,
  tokenSaved,
  userToken,
  setError,
  setIsLoading,
  setSuccess
) => {
  axios
    .post(`${url}?token=${userToken}`, formData)
    .then((res) => {
      setState(res.data.user);
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      if (tokenSaved) {
        localStorage.setItem("userToken", res.data.token);
      }
    })
    .catch((err) => {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      setIsLoading(false);
      setSuccess(false);
    });
};
