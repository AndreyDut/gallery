import React from "react";
import { Link } from "react-router-dom";
import info_photo from "../../assets/info-photo.jpg";
import { WrapMainPage } from "./mainPage.style";

const MainPage = () => {
  return (
    <WrapMainPage>
      <div className="banner">
        <div className="dark"></div>
        <div className="banner-content">
          <div className="banner-title">
            <p>
              <strong>Картины на заказ</strong>
            </p>
          </div>
          <div className="banner-sub-title">
            {" "}
            <p>
              Картины и портреты на холсте по фото на заказ за 1-2 дня от 1224
              рублей!
            </p>
            <p>Картины маслом в короткие сроки!</p>
          </div>

          <Link to={"/catalog"} className="link__catalog">
            Перейти в каталог
          </Link>
        </div>
      </div>
      <div className="gallery-info">
        <div className="info-title">
          <h2>Почему выбирают именно нас</h2>
          <p>Причины, по которым к нам обращаются многочисленные клиенты</p>
        </div>

        <div className="info-content">
          <div className="content-items">
            <div className="item">
              <div className="num">1</div>
              <h3>Доступная стоимость</h3>

              <p>
                В нашем каталоге представлена мужская и женская по самым
                доступным ценам
              </p>
            </div>

            <div className="item">
              <div className="num">2</div>
              <h3>Высокое качество материалов</h3>
              <p>
                При пошиве мужской и женской одежды производители используют
                только качественные материалы
              </p>
            </div>

            <div className="item">
              <div className="num">3</div>
              <h3>Широкий спектр услуг</h3>
              <p>
                В нашем магазине представлены многочисленные разновидности
                мужской и женской одежды от различных брендов
              </p>
            </div>

            <div className="item">
              <div className="num">4</div>
              <h3>Короткие сроки выполнения</h3>
              <p>
                Мы сотрудничаем с транспортными компаниями, поэтому покупатели
                получают свои заказы в кратчайший срок
              </p>
            </div>
          </div>
          <div className="wrap-photo">
            <img src={info_photo} alt="preview" />
          </div>
        </div>
      </div>
    </WrapMainPage>
  );
};

export default MainPage;
