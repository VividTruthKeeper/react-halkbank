// IMPORT MODULES
import React, { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../backend/UserContext";
import { LanguageContext } from "../backend/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";
import Success from "../components/global/Success";
import Error from "../components/global/Error";

// IMPORT IMAGES
import recovery from "../icons/recovery.svg";
import change from "../icons/change.svg";
import eye from "../icons/eye.svg";

// IMPORT VALIDATORS
import { ValidatePassword } from "../validators/ValidatePassword";
import { ValidateEmail } from "../validators/ValidateEmail";
import { changePassword } from "../backend/changePassword";

// SITEKEY
import { sitekey } from "../recaptcha";

// URL
import { destination } from "../destinationUrl";

const Recovery = () => {
  const { locale } = useContext(LanguageContext);
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const postUrl = destination + "/me";
  const userToken = localStorage.getItem("userToken");
  const { user, setUser } = useContext(UserContext);
  const [isPassword, setIsPassword] = useState(true);
  const [validate, setValidate] = useState(false);
  const [inputValid, setInputValid] = useState({
    email: false,
    new: false,
    match: false,
    captcha: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);
  const formData = new FormData();

  useEffect(() => {
    if (
      inputValid.email &&
      inputValid.new === inputValid.match &&
      inputValid.new &&
      inputValid.captcha
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  return (
    <section className="p-recovery">
      {error ? (
        <Error
          message={
            locale === "TKM"
              ? "Açar söz çalşylmady"
              : "Не удалось поменять пароль"
          }
          setError={setError}
        />
      ) : null}
      {success ? (
        <Success
          message={
            locale === "TKM"
              ? "Açar söz çalşyldy!"
              : "Ваш пароль успешно изменен!"
          }
          setSuccess={setSuccess}
        />
      ) : null}
      <Breadcrumb
        image={recovery}
        link={"/home/recovery"}
        linkTitle={locale === "TKM" ? "Açar sözüni çalyşmak" : "Смена пароля"}
      />
      <div className="container">
        {isLoading ? <Loader /> : ""}
        {user ? (
          user.is_activated ? (
            <div className="p-recovery-inner">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="cu-bottom p-recovery-title">
                  <h2>
                    {locale === "TKM"
                      ? "Açar sözüni çalyşmak"
                      : "Поменять пароля"}
                  </h2>
                  <button
                    type="submit"
                    disabled={!btnEnabled}
                    className="sign-btn cu-btn"
                    onClick={() => {
                      inp1.current.value = "";
                      inp2.current.value = "";
                      inp3.current.value = "";
                      setIsLoading(true);
                      formData.append("email", inputValid.email);
                      formData.append("password", inputValid.new);
                      formData.append(
                        "password_confirmation",
                        inputValid.match
                      );
                      changePassword(
                        postUrl,
                        formData,
                        setUser,
                        true,
                        userToken,
                        setError,
                        setIsLoading,
                        setSuccess
                      );
                    }}
                  >
                    <div>
                      <div className="btn-img">
                        <img src={change} alt="logout" />
                      </div>
                      <h3>
                        {locale === "TKM"
                          ? "Ýatda sakla"
                          : "Сохранить изменения"}
                      </h3>
                    </div>
                  </button>
                </div>
                <div className="p-recovery-content">
                  <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input
                      ref={inp3}
                      type="text"
                      id="email"
                      autoComplete="true"
                      onChange={(e) => {
                        setValidate(true);
                        if (ValidateEmail(e.target.value) && user) {
                          if (user.email === e.target.value) {
                            setInputValid({
                              ...inputValid,
                              email: e.target.value,
                            });
                          } else {
                            setInputValid({ ...inputValid, email: false });
                          }
                        } else {
                          setInputValid({ ...inputValid, email: false });
                        }
                      }}
                    />
                    {validate ? (
                      <span
                        className={
                          inputValid.email ? "pass-check" : "pass-check active"
                        }
                      >
                        {locale === "TKM"
                          ? "Nädogry email girizildi"
                          : "Введен неверный E-mail"}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-block-outer">
                    <div className="input-block rel-block">
                      <label htmlFor="new-p">
                        {locale === "TKM" ? "Täze açar söz" : "Новый пароль"}
                      </label>
                      <input
                        ref={inp1}
                        autoComplete="true"
                        type={isPassword ? "password" : "text"}
                        id="new-p"
                        onChange={(e) => {
                          setValidate(true);
                          if (ValidatePassword(e.target.value)) {
                            setInputValid({
                              ...inputValid,
                              new: e.target.value,
                            });
                          } else {
                            setInputValid({ ...inputValid, new: false });
                          }
                        }}
                      />
                      <div
                        className="p-input-img"
                        onClick={() => {
                          setIsPassword(!isPassword);
                        }}
                      >
                        <img src={eye} alt="reveal/hide" />
                      </div>
                    </div>
                    {validate ? (
                      <span
                        className={
                          inputValid.new
                            ? "pass-check pass-check-margined"
                            : "pass-check pass-check-margined active"
                        }
                      >
                        {locale === "TKM"
                          ? "Açar sözi  8 belgiden az bolmadyk we 15 belgiden kän bolmadyk we iň azyndan 1 san, 1 baş harp we 1 setir harp, 1 ýörite bellikden ybarat bolmalydyr. "
                          : "Пароль должен содержать не менее 1 цифры, 1 заглавной и 1 прописной буквы, 1 особого знака, и быть не менее 8 и не более 15 символов в длину."}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm-p">
                      {locale === "TKM"
                        ? "Açar sözi gaýtalaň"
                        : "Повторите пароль"}
                    </label>
                    <input
                      ref={inp2}
                      autoComplete="true"
                      type={isPassword ? "password" : "text"}
                      id="confirm-p"
                      onChange={(e) => {
                        setValidate(true);
                        setInputValid({ ...inputValid, match: e.target.value });
                      }}
                    />
                    {validate ? (
                      <span
                        className={
                          inputValid.new === inputValid.match
                            ? "pass-check"
                            : "pass-check active"
                        }
                      >
                        {locale === "TKM"
                          ? "Açar sözler gabat gelmeli"
                          : "Пароли должны совпадать"}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="captcha-wrapper">
                  <ReCAPTCHA
                    className="captcha"
                    sitekey={sitekey}
                    onChange={() => {
                      setInputValid({ ...inputValid, captcha: true });
                    }}
                  />
                </div>
              </form>
            </div>
          ) : (
            <h2>
              {locale === "TKM"
                ? "Açar sözüni çalyşmak üçin siziň akkaundyňyz aktiwleşdirilmeli. Az wagtdan gaýtadan synanşyp görüň."
                : "Чтобы поменять пароль ваш аккаунт должен быть активирован. Пожалуйста, попробуйте позже"}
            </h2>
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Recovery;
