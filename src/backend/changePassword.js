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
      if (tokenSaved) {
        localStorage.setItem("userToken", res.data.token);
      }
    })
    .catch((err) => {
      setError(err.response.data.error);
      setIsLoading(false);
      setSuccess(false);
    });
};
