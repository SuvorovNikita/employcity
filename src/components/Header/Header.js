import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

import close from "../../assets/img/icon/close-icon.svg"
import open from "../../assets/img/icon/menu-icon.svg"
import logo from "../../assets/img/icon/logo.svg"

const Header = () => {
  const [isOpenedHeader, setIsOpenedHeader] = useState(false)

  const toggleHeader = () => {
    setIsOpenedHeader(value => !value)
  }

  const toggleHtmlOverlay = isOpenedHeader => {
    if (isOpenedHeader) {
      document.documentElement.classList.add("is-overlay")
      return
    }

    document.documentElement.classList.remove("is-overlay")
  }

  useEffect(() => {
    toggleHtmlOverlay(isOpenedHeader)
  }, [isOpenedHeader])
  return (
    <>
      <header className="c-header">
        <div className="container">
          <div className="c-header__body">
            <a href="/" className="c-header__logo">
              <img src={logo} alt="" />
            </a>
            <nav className="c-header__menu">
              <ul className="c-header__list">
                <li>
                  <Link
                    href=""
                    className="c-header__link c-header__link--active"
                  >
                    Бизнес
                  </Link>
                </li>
                <li>
                  <Link href="" className="c-header__link">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="" className="c-header__link">
                    Цены
                  </Link>
                </li>
                <li>
                  <Link href="" className="c-header__link">
                    Оформить заказ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section
        className={"c-mobile-header" + (isOpenedHeader ? " is-opened" : "")}
      >
        <div className="c-mobile-header__inner">
          <div className="container">
            <div className="c-mobile-header__top">
              <div className="c-mobile-header__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div
                className="c-mobile-header__toggle"
                role="button"
                tabIndex="0"
                onClick={() => toggleHeader()}
                onKeyDown={e => (e.key === "Enter" ? toggleHeader() : null)}
              >
                {!isOpenedHeader && <img src={open} alt="Open Menu" />}
                {isOpenedHeader && <img src={close} alt="Close Menu" />}
              </div>
            </div>
            <div className="c-mobile-header__body">
              <div className="c-mobile-header__inner-body">
                <div className="container">
                  <div className="c-mobile-header__flex">
                    <div className="c-mobile-header__navigation">
                      <div className="c-mobile-header__item">
                        <Link
                          to="/"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          Бизнес
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="/"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          О нас
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="/"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          Цены
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="/"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          Оформить заказ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
