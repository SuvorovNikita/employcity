import React from "react"
import logo from "../assets/img/icon/logo.svg"

import "../styles/index.scss"

const IndexPages = () => {
  return (
    <main>
      <div className="wrapper">
        <header className="c-header">
          <div className="container">
            <div className="c-header__body">
              <a href="/" className="c-header__logo">
                <img src={logo} alt="" />
              </a>
              <nav className="c-header__menu">
                <ul className="c-header__list">
                  <li>
                    <a
                      href=""
                      className="c-header__link c-header__link--active"
                    >
                      Бизнес
                    </a>
                  </li>
                  <li>
                    <a href="" className="c-header__link">
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href="" className="c-header__link">
                      Цены
                    </a>
                  </li>
                  <li>
                    <a href="" className="c-header__link">
                      Оформить заказ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="c-section c-section--hero"></div>
      </div>
    </main>
  )
}

export default IndexPages
