import axios from "axios";

export const sendRequest = (url, token, data, setState, setLoader) => {
  const form = new FormData();
  form.append("file", data.file);
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
  axios
    .post(`${url}?token=${token}`, form)
    .then((res) => {
      setState(res.data);
      if (setLoader) {
        setLoader(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoader) {
        setLoader(false);
      }
    });
};
