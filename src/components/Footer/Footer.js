import React from "react"
import { Link } from "gatsby"

import qiwi from "../../assets/img/icon/qiwi.svg"
import yandex from "../../assets/img/icon/yandex.svg"
import vk from "../../assets/img/icon/vk.svg"
import web from "../../assets/img/icon/web.svg"
import email from "../../assets/img/icon/email.svg"

const Footer = () => {
  return (
    <>
      <footer className="c-footer">
        <div className="container">
          <div className="c-footer__wrapper">
            <div className="c-footer__title">
              © 2018 <span> «LoremIpsum.net»</span> Все права защищены.
            </div>
            <nav className="c-footer__nav">
              <div className="c-footer__links">
                <img src={qiwi} alt="" />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://qiwi.com/"
                  className="c-footer__link"
                >
                  Qiwi wallet
                </Link>
              </div>
              <div className="c-footer__links">
                <img src={yandex} alt="" />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://yoomoney.ru"
                  className="c-footer__link"
                >
                  Yandex Money
                </Link>
              </div>
              <div className="c-footer__links">
                <img src={web} alt="" />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.webmoney.ru/"
                  className="c-footer__link"
                >
                  Web Money
                </Link>
              </div>
              <div className="c-footer__links">
                <img src={email} alt="" />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:info@ipsum228.com"
                  className="c-footer__link"
                >
                  info@ipsum228.com
                </Link>
              </div>
              <div className="c-footer__links">
                <img src={vk} alt="" />
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://vk.com"
                  className="c-footer__link"
                >
                  Мы вконтакте
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
