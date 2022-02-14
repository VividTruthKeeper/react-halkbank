// IMPORT MODULES
import React, { useRef } from "react";

// IMPORT IMAGES
import cardRemove from "../../icons/card-remove.svg";
import arrow from "../../icons/arrow-down.svg";

const TitleGrid = () => {
  const handleOpen = (el, target) => {
    el.current.classList.toggle("active");
    target.target.children[2].classList.toggle("active");
  };
  const handlePush = (el) => {
    el.current.classList.toggle("pushed");
  };
  const drop1 = useRef();
  const drop2 = useRef();
  const drop3 = useRef();
  const drop4 = useRef();
  const drop5 = useRef();
  const drop6 = useRef();
  const drop7 = useRef();
  const drop8 = useRef();

  const push2 = useRef();
  const push3 = useRef();
  const push4 = useRef();
  const push6 = useRef();
  const push7 = useRef();
  const push8 = useRef();

  return (
    <section className="titlegrid">
      <ul>
        <li className="titlegrid-wrapper">
          <div className="title-container">
            <div
              className="title-el"
              onClick={(e) => {
                handleOpen(drop1, e);
                handlePush(push2);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop1}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push2}
              onClick={(e) => {
                handleOpen(drop2, e);
                handlePush(push3);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop2}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push3}
              onClick={(e) => {
                handleOpen(drop3, e);
                handlePush(push4);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop3}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push4}
              onClick={(e) => {
                handleOpen(drop4, e);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop4}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
        </li>
        <li className="titlegrid-wrapper">
          <div className="title-container">
            <div
              className="title-el"
              onClick={(e) => {
                handleOpen(drop5, e);
                handlePush(push6);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop5}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push6}
              onClick={(e) => {
                handleOpen(drop6, e);
                handlePush(push7);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop6}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push7}
              onClick={(e) => {
                handleOpen(drop7, e);
                handlePush(push8);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop7}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
          <div className="title-container">
            <div
              className="title-el"
              ref={push8}
              onClick={(e) => {
                handleOpen(drop8, e);
              }}
            >
              <div className="title-left">
                <div className="title-left-img">
                  <img src={cardRemove} alt="card" />
                </div>
              </div>
              <div className="title-mid">
                <p>Сохранять данные банковской карты на веб-сайтах</p>
              </div>
              <div className="title-right">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="title-drop" ref={drop8}>
              <h2>
                При использовании общедоступных сетей «Wi-Fi», старайтесь не
                вводить свою личную информацию, а к незнакомым сетям «Wi-Fi»
                рекомендуется вообще не подключаться, поскольку эти сети могут
                использоваться для атаки и получения вашей личной информации
              </h2>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TitleGrid;
