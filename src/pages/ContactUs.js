// IMPORT MODULES
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import CustomSelect from "../components/global/CustomSelect";
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";
import Success from "../components/global/Success";

// IMPORT FUNCTIONS
import { sendMessage } from "../backend/sendMessage";

// IMPORT IMAGES
import mail from "../icons/mail-black.svg";
import send from "../icons/send.svg";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const token = localStorage.getItem("userToken");
  const postUrl = "http://shahsyotag.halkbank.gov.tm:8000//api/message";
  const formData = new FormData();
  const [topic, setTopic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValid, setInputValid] = useState({
    message: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);

  useEffect(() => {
    if (topic && inputValid.message) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [topic, inputValid]);
  return (
    <section className="contact-us">
      {success ? (
        <Success message={"Ваше сообщение успешно отправлено!"} />
      ) : null}
      <Breadcrumb
        image={mail}
        link={"/home/contact-us"}
        linkTitle={"Написать письмо "}
      />
      <div className="container">
        <div className="contact-us-inner">
          <h2 className="cu-title">Написать письмо</h2>
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
                  <label htmlFor="topic">Тема письма</label>
                  <CustomSelect
                    placeholder={"Выберите тему письма"}
                    name={"topic"}
                    items={["Пластиковые карты", "Кредиты"]}
                    stateSetter={(e) => {
                      setTopic(e);
                    }}
                    eTarget={true}
                    customId={"topic"}
                    elName={"topic"}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="msg">Сообщение</label>
                  <textarea
                    name="msg"
                    id="msg"
                    rows="10"
                    placeholder="Ваше сообщение"
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
                  <h1>CAPTCHA</h1>
                  <button
                    type="submit"
                    disabled={!btnEnabled}
                    className="sign-btn cu-btn"
                    onClick={() => {
                      setIsLoading(true);
                      formData.append("subject", topic);
                      formData.append("message", inputValid.message);
                      let today = new Date();
                      let dd = String(today.getDate()).padStart(2, "0");
                      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
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
                          setTimeout(() => {
                            setSuccess(false);
                          }, 2000);
                        }
                      );
                    }}
                  >
                    <div>
                      <h3>Отправить письмо</h3>
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
