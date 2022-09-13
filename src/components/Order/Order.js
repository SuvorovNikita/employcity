import React from "react"
import bg from "../../assets/img/photo/bg.png"
import icon1 from "../../assets/img/icon/icon-1.svg"
import icon2 from "../../assets/img/icon/icon-2.svg"
import icon3 from "../../assets/img/icon/icon-3.svg"
import icon4 from "../../assets/img/icon/icon-4.svg"
import icon5 from "../../assets/img/icon/icon-5.svg"
import add from "../../assets/img/icon/add.svg"

const Order = () => {
  return (
    <>
      <section
        className="c-section c-section--hero c-section--order"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <h2 className="c-section__title">
            Оформление
            <span className="c-section__title--blue">
              &nbsp;&nbsp;&nbsp;Заказа
            </span>
          </h2>
          <p className="c-section__subtitle">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
          </p>

          <div className="c-section__cards">
            <div className="c-section__card">
              <div className="c-section__item">
                <img src={icon1} alt="" />
              </div>
              <div className="c-section__text">Lorem ipsum dolor sit amet</div>
            </div>
            <div className="c-section__card">
              <div className="c-section__item">
                <img src={icon2} alt="" />
              </div>
              <div className="c-section__text">Сonsecteturadipiscing elit</div>
            </div>
            <div className="c-section__card">
              <div className="c-section__item">
                <img src={icon3} alt="" />
              </div>
              <div className="c-section__text">Sed do eiusmod tempor</div>
            </div>
            <div className="c-section__card">
              <div className="c-section__item">
                <img src={icon4} alt="" />
              </div>
              <div className="c-section__text">
                Esse cillum dolore eu fugiat
              </div>
            </div>
            <div className="c-section__card">
              <div className="c-section__item">
                <img src={icon5} alt="" />
              </div>
              <div className="c-section__text">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
          </div>

          <form action="" className="c-section__form">
            <div className="c-section__inner">
              <select name="select-category" className="c-section__select">
                <option value={1} default disabled selected>
                  Выберите тип системы
                </option>
                <option value={2}>Sed ut perspiciatis</option>
                <option value={3}>Nemo enim ipsam </option>
                <option value={4}>Et harum quidem</option>
                <option value={5}>Temporibus autem</option>
                <option value={6}>Itaque earum rerum</option>
              </select>
            </div>

            <input
              placeholder="Ваш e-mail"
              type="email"
              name="email"
              className="c-section__email"
            />
            <input
              placeholder="Ваше имя"
              type="name"
              name="name"
              className="c-section__name"
            />
            <div className="c-section__label-inner">
              <label for="volume" className="c-section__label">
                Sed ut perspiciatis, unde omnis iste natus
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value="90"
                step="10"
                className="c-section__range"
              />
            </div>
            <div className="c-section__input--wrapper">
              <input
                name="file"
                type="file"
                id="input__file"
                className="c-section__input--file"
                multiple
              />
              <label
                for="input__file"
                className="c-section__input--file-button"
              >
                <span className="c-section__file-icon-wrapper">
                  <img
                    class="c-section__input--file-icon"
                    src={add}
                    width="25"
                  />
                </span>
                <span className="c-section__input--file-button-text">
                  Прикрепить файл
                </span>
              </label>
            </div>
          </form>
          <div className="c-section__button">
            <input
              className="c-button c-button--base"
              type="button"
              value="Отправить"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Order
