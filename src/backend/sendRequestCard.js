import axios from "axios";

export const sendRequestCard = (url, token, data, setProgress) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
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
  form.append("date", `${dd}.${mm}.${yyyy}`);

  form.append("price", data.price);
  axios
    .post(`${url}?token=${token}`, form, {
      onUploadProgress: (progressEvent) => {
        const progress = progressEvent.loaded / progressEvent.total;
        setProgress(progress);
      },
    })
    .then((res) => {
      window.open(res.data, "_self").focus();
    })
    .catch(() => {});
};
