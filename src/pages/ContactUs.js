// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import CustomSelect from "../components/global/CustomSelect";
import Breadcrumb from "../components/global/Breadcrumb";

// IMPORT IMAGES
import mail from "../icons/mail-black.svg";
import send from "../icons/send.svg";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <Breadcrumb
        image={mail}
        link={"/home/contact-us"}
        linkTitle={"Написать письмо "}
      />
      <div className="container">
        <div className="contact-us-inner">
          <h2 className="cu-title">Написать письмо</h2>
          <form>
            <div className="input-block">
              <label htmlFor="topic">Тема письма</label>
              <CustomSelect
                placeholder={"Выберите тему письма"}
                name={"topic"}
                items={["Пластиковые карты", "Кредиты"]}
                stateSetter={() => null}
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
              ></textarea>
            </div>
            <div className="cu-bottom">
              <h1>CAPTCHA</h1>
              <button type="button" className="sign-btn cu-btn">
                <div>
                  <h3>Отправить письмо</h3>
                  <div className="btn-img">
                    <img src={send} alt="logout" />
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
