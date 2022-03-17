import axios from "axios";
// import { getDate } from "../helpers/Date";

export const sendRequestCard = (url, token, data, setLoader) => {
  let today = new Date().toLocaleDateString();
  const form = new FormData();
  data.file.map((el) => {
    form.append("file[]", el);
  });
  form.append("name", data.name);
  form.append("surname", data.surname);
  form.append("middlename", data.middlename);
  form.append("place_of_residence", data.place_of_residence);
  form.append("email", data.email);
  form.append("branch", data.branch);
  form.append("birthdate", data.birthdate);
  form.append("selected_card", data.selected_card);
  form.append("phone_number", data.phone_number);
  form.append("home_phone_number", data.home_phone_number);
  form.append("passport_series", data.passport_series);
  form.append("passport_by", data.passport_by);
  form.append("region", data.region);
  form.append("date_arrival_bank", data.date_arrival_bank);
  form.append("selected_time", data.selected_time);
  form.append("the_codeword", data.the_codeword);
  form.append("sms_notification", data.sms_notification);
  // form.append("date", `today`);

  axios
    .post(`${url}?token=${token}`, form)
    .then((res) => {
      window.open(res.request.responseURL, "_blank").focus();
      setLoader(false);
    })
    .catch(() => {
      setLoader(false);
    });
};
