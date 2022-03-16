// IMPORT MODULES
import React, { useRef } from "react";

// IMPORT IMAGES
import cardRemove from "../../icons/card-remove.svg";
import arrow from "../../icons/arrow-down.svg";
import shield from "../../icons/shield.svg";
import globe from "../../icons/globe.svg";
import direct from "../../icons/direct.svg";
import lock from "../../icons/lock.svg";
import wifi from "../../icons/wifi.svg";
import clipboard_close from "../../icons/clipboard-close.svg";

const TitleGrid = () => {
  return (
    <section className="titlegrid">
      <div className="titlegrid-inner">
        <ul>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={cardRemove} alt="title" />
                </div>
                <span>Сохранять данные банковской карты на веб-сайтах</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={shield} alt="title" />
                </div>
                <span>Используйте данный сервис где есть антивирус</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={globe} alt="title" />
                </div>
                <span>Используйте данный сервис где есть антивирус</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={direct} alt="title" />
                </div>
                <span>
                  Открытие писем и вложений от неизвестных электронных почт
                </span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={lock} alt="title" />
                </div>
                <span>Используйте данный сервис где есть антивирус</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={wifi} alt="title" />
                </div>
                <span>Использование незнакомых «Wi-Fi» сетей</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={shield} alt="title" />
                </div>
                <span>Используйте данный сервис где есть антивирус</span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
          <li
            onClick={(e) => {
              for (let i = 0; i < e.target.children.length; i++) {
                let child = e.target.children[i];
                if (
                  child.classList.contains("title") ||
                  child.classList.contains("title-dropdown")
                ) {
                  child.classList.toggle("active");
                }
              }
            }}
          >
            <div className="title">
              <div className="title-left">
                <div className="title-img">
                  <img src={clipboard_close} alt="title" />
                </div>
                <span>
                  Принятие различных соглашений без чтения и ознакомления
                </span>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-dropdown">
              <p>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TitleGrid;
