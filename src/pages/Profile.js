// IMPORT MODULES
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../backend/UserContext";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";

// IMPORT VALIDATORS
import { ValidateEmail } from "../validators/ValidateEmail";
import { ValidatePhoneNumber } from "../validators/ValidatePhoneNumber";

// IMPORT IMAGES
import userImg from "../icons/user-black.svg";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [inputValid, setInputValid] = useState({
    surname: true,
    name: true,
    fathers: true,
    date: true,
    passport: true,
    p_address: true,
    address: true,
    mail: true,
    mobile: true,
    home: true,
  });
  // const [btnEnabled, setBtnEnabled] = useState(false);

  // useEffect(() => {
  //   if (
  //     inputValid.surname === true &&
  //     inputValid.name === true &&
  //     inputValid.fathers === true &&
  //     inputValid.date === true &&
  //     inputValid.passport === true &&
  //     inputValid.p_address === true &&
  //     inputValid.address === true &&
  //     inputValid.mail === true &&
  //     inputValid.mobile === true &&
  //     inputValid.home === true
  //   ) {
  //     setBtnEnabled(true);
  //   } else {
  //     setBtnEnabled(false);
  //   }
  // }, [inputValid]);
  return (
    <section className="profile">
      <Breadcrumb
        image={userImg}
        link={"/home/profile"}
        linkTitle={"Данные профиля"}
      />
      <div className="container">
        <div className="profile-inner">
          <form>
            <div className="form-top">
              <div className="cu-bottom profile-title">
                <h2 className="profile-title">Данные профиля</h2>
                {/* <button
                  type="button"
                  disabled={!btnEnabled}
                  className="sign-btn cu-btn"
                >
                  <div>
                    <div className="btn-img">
                      <img src={change} alt="logout" />
                    </div>
                    <h3>Сохранить изменения</h3>
                  </div>
                </button> */}
              </div>
            </div>
            <div className="form-bottom">
              <div className="input-block">
                <label htmlFor="surname">Фамилия</label>
                <input
                  readOnly
                  type="text"
                  id="surname"
                  defaultValue={user ? user.surname : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, surname: true });
                    } else {
                      setInputValid({ ...inputValid, surname: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="name">Имя</label>
                <input
                  readOnly
                  type="text"
                  id="name"
                  defaultValue={user ? user.name : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, name: true });
                    } else {
                      setInputValid({ ...inputValid, name: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="fathers">Отчество</label>
                <input
                  readOnly
                  type="text"
                  id="fathers"
                  defaultValue={user ? user.middle_name : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, fathers: true });
                    } else {
                      setInputValid({ ...inputValid, fathers: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="date">Дата рождения</label>
                <input
                  readOnly
                  type="date"
                  id="date"
                  defaultValue={user ? user.date_birth : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, date: true });
                    } else {
                      setInputValid({ ...inputValid, date: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="passport">Паспортные данные</label>
                <input
                  readOnly
                  type="text"
                  id="passport"
                  defaultValue={user ? user.passport : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, passport: true });
                    } else {
                      setInputValid({ ...inputValid, passport: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="p-address">Место выдачи паспорта</label>
                <input
                  readOnly
                  type="text"
                  id="p-address"
                  defaultValue={user ? user.place_passport : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, p_address: true });
                    } else {
                      setInputValid({ ...inputValid, p_address: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="address">Адрес проживания</label>
                <input
                  readOnly
                  type="text"
                  id="address"
                  defaultValue={user ? user.address_residence : ""}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setInputValid({ ...inputValid, address: true });
                    } else {
                      setInputValid({ ...inputValid, address: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="mail">Электронная почта</label>
                <input
                  readOnly
                  type="email"
                  id="mail"
                  defaultValue={user ? user.email : ""}
                  onChange={(e) => {
                    if (ValidateEmail(e.target.value)) {
                      setInputValid({ ...inputValid, mail: true });
                    } else {
                      setInputValid({ ...inputValid, mail: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="mobile">Мобильный телефон</label>
                <input
                  readOnly
                  type="text"
                  id="mobile"
                  defaultValue={user ? user.mobile_phone : ""}
                  onChange={(e) => {
                    if (ValidatePhoneNumber(e.target.value)) {
                      setInputValid({ ...inputValid, mobile: true });
                    } else {
                      setInputValid({ ...inputValid, mobile: false });
                    }
                  }}
                />
              </div>
              <div className="input-block">
                <label htmlFor="homeTel">Домашний телефон</label>
                <input
                  readOnly
                  type="text"
                  id="homeTel"
                  defaultValue={user ? user.home_phone : ""}
                  onChange={(e) => {
                    if (ValidatePhoneNumber(e.target.value)) {
                      setInputValid({ ...inputValid, home: true });
                    } else {
                      setInputValid({ ...inputValid, home: false });
                    }
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
