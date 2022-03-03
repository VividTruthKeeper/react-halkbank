// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";
import Loader from "../components/global/Loader";

// IMPORT IMAGES
import recovery from "../icons/recovery.svg";
import change from "../icons/change.svg";
import eye from "../icons/eye.svg";

// IMPORT VALIDATORS
import { ValidatePassword } from "../validators/ValidatePassword";
import { ValidateEmail } from "../validators/ValidateEmail";
import { changePassword } from "../backend/changePassword";

const Recovery = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const postUrl = "http://95.85.124.85:8000/api/me";
  const userToken = localStorage.getItem("userToken");
  const { user, setUser } = useContext(UserContext);
  const [isPassword, setIsPassword] = useState(true);
  const [validate, setValidate] = useState(false);
  const [inputValid, setInputValid] = useState({
    email: false,
    new: false,
    match: false,
  });
  const [btnEnabled, setBtnEnabled] = useState(false);
  const formData = new FormData();

  useEffect(() => {
    if (
      inputValid.email &&
      inputValid.new === inputValid.match &&
      inputValid.new !== ""
    ) {
      setBtnEnabled(true);
    } else {
      setBtnEnabled(false);
    }
  }, [inputValid]);

  return (
    <section className="p-recovery">
      <Breadcrumb
        image={recovery}
        link={"/home/recovery"}
        linkTitle={"Смена пароля"}
      />
      <div className="container">
        {isLoading ? <Loader /> : ""}
        {user ? (
          user.is_activated ? (
            <div className="p-recovery-inner">
              <form>
                <div className="cu-bottom p-recovery-title">
                  <h2>Поменять пароль</h2>
                  <button
                    type="button"
                    disabled={!btnEnabled}
                    className="sign-btn cu-btn"
                    onClick={() => {
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
                        () => null,
                        setIsLoading,
                        setSuccess
                      );
                    }}
                  >
                    <div>
                      <div className="btn-img">
                        <img src={change} alt="logout" />
                      </div>
                      <h3>Сохранить изменения</h3>
                    </div>
                  </button>
                </div>
                <div className="p-recovery-content">
                  <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="true"
                      onChange={(e) => {
                        if (ValidateEmail(e.target.value)) {
                          setInputValid({
                            ...inputValid,
                            email: e.target.value,
                          });
                        } else {
                          setInputValid({ ...inputValid, email: false });
                        }
                      }}
                    />
                  </div>
                  <div className="input-block rel-block">
                    <label htmlFor="new-p">Новый пароль</label>
                    <input
                      autoComplete="false"
                      type={isPassword ? "password" : "text"}
                      id="new-p"
                      onChange={(e) => {
                        setValidate(true);
                        if (ValidatePassword(e.target.value)) {
                          setInputValid({ ...inputValid, new: e.target.value });
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
                    {validate ? (
                      <span
                        className={
                          inputValid.new ? "pass-check" : "pass-check active"
                        }
                      >
                        Пароль должен содержать не менее 1 цифры, 1 заглавной и
                        1 прописной буквы, 1 особого знака, и быть не менее 8 и
                        не более 15 символов в длину.
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm-p">Повторите новый пароль</label>
                    <input
                      autoComplete="false"
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
                        Пароли должны совпадать
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {success ? (
                  <h1 className="success">Ваш пароль успешно изменен!</h1>
                ) : (
                  ""
                )}
              </form>
            </div>
          ) : (
            <h2>
              Чтобы поменять пароль ваш аккаунт должен быть активирован.
              Пожалуйста, попробуйте позже
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
