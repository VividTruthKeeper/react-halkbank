// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { LanguageContext } from "../backend/LanguageContext";

// IMPORT COMPONENTS
import CustomSelect from "../components/global/CustomSelect";
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";
import Success from "../components/global/Success";
import Error from "../components/global/Error";

// IMPORT FUNCTIONS
import { sendMessage } from "../backend/sendMessage";

// IMPORT IMAGES
import mail from "../icons/mail-black.svg";
import send from "../icons/send.svg";

// SITEKEY
import { sitekey } from "../recaptcha";

// URL
import { destination } from "../destinationUrl";

const ContactUs = () => {
  const { locale } = useContext(LanguageContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const token = localStorage.getItem("userToken");
  const postUrl = destination + "/message";
  const formData = new FormData();
  const [topic, setTopic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValid, setInputValid] = useState({
    message: false,
    type: null,
    captcha: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (topic && inputValid.message && inputValid.captcha) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [topic, inputValid]);
  return (
    <section className="contact-us">
      {error ? (
        <Error
          message={
            locale === "TKM"
              ? "Hat ugradylmady"
              : "Не удалось отправить сообщение"
          }
          setError={setError}
        />
      ) : null}
      {success ? (
        <Success
          message={
            locale === "TKM"
              ? "Hat ugradyldy!"
              : "Ваше сообщение успешно отправлено!"
          }
          setSuccess={setSuccess}
        />
      ) : null}
      <Breadcrumb
        image={mail}
        link={"/home/contact-us"}
        linkTitle={locale === "TKM" ? "Hat ýazmak" : "Написать письмо"}
      />
      <div className="container">
        <div className="contact-us-inner">
          <h2 className="cu-title">
            {locale === "TKM" ? "Hat ýazmak" : "Написать письмо"}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <div className="form-wrapper">
                <div className="input-block">
                  <label htmlFor="topic">
                    {locale === "TKM" ? "Hatyň temasy" : "Тема письма"}
                  </label>
                  <CustomSelect
                    placeholder={
                      locale === "TKM"
                        ? "Hatyň temasyny saýlaň"
                        : "Выберите тему письма"
                    }
                    name={"topic"}
                    items={
                      locale === "TKM"
                        ? ["Plastik kartlar", "Karzlar"]
                        : ["Пластиковые карты", "Кредиты"]
                    }
                    stateSetter={(e) => {
                      setTopic(e);
                      if (
                        e === "Пластиковые карты" ||
                        e === "Plastik kartlar"
                      ) {
                        setInputValid({ ...inputValid, type: 1 });
                      } else {
                        setInputValid({ ...inputValid, type: 0 });
                      }
                    }}
                    eTarget={true}
                    customId={"topic"}
                    elName={"topic"}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="msg">
                    {locale === "TKM" ? "Hat" : "Сообщение"}
                  </label>
                  <textarea
                    name="msg"
                    id="msg"
                    rows="10"
                    placeholder={
                      locale === "TKM" ? "Siziň hatyňyz" : "Ваше сообщение"
                    }
                    onChange={(e) => {
                      if (e.target.value !== "") {
                        setInputValid({
                          ...inputValid,
                          message: e.target.value,
                        });
                      } else {
                        setInputValid({ ...inputValid, message: false });
                      }
                    }}
                  ></textarea>
                </div>
                <div className="cu-bottom">
                  <div className="captcha-wrapper">
                    <ReCAPTCHA
                      className="captcha"
                      sitekey={sitekey}
                      onChange={() => {
                        setInputValid({ ...inputValid, captcha: true });
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!btnEnabled}
                    className="sign-btn cu-btn"
                    onClick={() => {
                      setIsLoading(true);
                      formData.append("subject", topic);
                      formData.append("message", inputValid.message);
                      formData.append("type", inputValid.type);
                      let today = new Date();
                      let dd = String(today.getDate()).padStart(2, "0");
                      let mm = String(today.getMonth() + 1).padStart(2, "0");
                      let yyyy = today.getFullYear();
                      formData.append("date", `${dd}.${mm}.${yyyy}`);
                      sendMessage(
                        postUrl,
                        token,
                        formData,
                        (e) => {
                          setIsLoading(e);
                        },
                        () => {
                          setSuccess(true);
                        },
                        setError
                      );
                    }}
                  >
                    <div>
                      <h3>
                        {locale === "TKM" ? "Haty ugrat" : "Отправить письмо"}
                      </h3>
                      <div className="btn-img">
                        <img src={send} alt="logout" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
