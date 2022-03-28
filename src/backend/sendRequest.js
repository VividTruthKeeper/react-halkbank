import axios from "axios";

export const sendRequest = (
  url,
  token,
  data,
  setState,
  setLoader,
  setError
) => {
  const form = new FormData();

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  data.file.map((el) => {
    form.append("file[]", el);
  });
  form.append("name", data.name);
  form.append("last_name", data.surname);
  form.append("middle_name", data.fathers);
  form.append("addres", data.address);
  form.append("email", data.email);
  form.append("branch", data.branch);
  form.append("birth", data.birth);
  form.append("type", data.type);
  form.append("mobile_phone", data.mobile);
  form.append("home_phone", data.home);
  form.append("passport_series", data.passport);
  form.append("passport_issued_by", data.p_address);
  form.append("region", data.region);
  form.append("place_of_work", data.workplace);
  form.append("amount_of_salary", data.salary);
  form.append("position", data.position);
  form.append("work_experience", data.exp);
  form.append("date", `${dd}.${mm}.${yyyy}`);
  axios
    .post(`${url}?token=${token}`, form)
    .then((res) => {
      setState(res);
      if (setLoader) {
        setLoader(false);
      }
    })
    .catch((err) => {
      if (setLoader) {
        setLoader(false);
      }

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    });
};
