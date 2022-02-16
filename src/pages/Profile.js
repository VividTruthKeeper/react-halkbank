// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import Breadcrumb from "../components/global/Breadcrumb";

// IMPORT IMAGES
import user from "../icons/user-black.svg";

const Profile = () => {
  return (
    <section className="profile">
      <Breadcrumb
        image={user}
        link={"/home/profile"}
        linkTitle={"Данные профиля"}
      />
      <div className="container">
        <div className="profile-inner">
          <h2 className="profile-title">Данные профиля</h2>
          <form>
            <div className="input-block">
              <label htmlFor="surname">Фамилия</label>
              <input type="text" id="surname" defaultValue={"Amanow"} />
            </div>
            <div className="input-block">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" defaultValue={"Aman"} />
            </div>
            <div className="input-block">
              <label htmlFor="fathers">Отчество</label>
              <input type="text" id="fathers" defaultValue={"Amanowic"} />
            </div>
            <div className="input-block">
              <label htmlFor="date">Дата рождения</label>
              <input type="date" id="date" defaultValue={"1990-02-20"} />
            </div>
            <div className="input-block">
              <label htmlFor="passport">Паспортные данные</label>
              <input type="text" id="passport" defaultValue={"I-AŞ 212121"} />
            </div>
            <div className="input-block">
              <label htmlFor="p-address">Место выдачи паспорта</label>
              <input
                type="text"
                id="p-address"
                defaultValue={"Kopetdag etrapyň häkimliki"}
              />
            </div>
            <div className="input-block">
              <label htmlFor="address">Адрес проживания</label>
              <input
                type="text"
                id="address"
                defaultValue={"Parahat 3/1, j.16, k.5"}
              />
            </div>
            <div className="input-block">
              <label htmlFor="mail">Электронная почта</label>
              <input
                type="email"
                id="mail"
                defaultValue={"amanamanow@gmail.com"}
              />
            </div>
            <div className="input-block">
              <label htmlFor="mobile">Мобильный телефон</label>
              <input type="text" id="mobile" defaultValue={"+99365656565 "} />
            </div>
            <div className="input-block">
              <label htmlFor="homeTel">Домашний телефон</label>
              <input type="text" id="homeTel" defaultValue={"+99312121212 "} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
