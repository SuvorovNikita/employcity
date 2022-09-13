import React from "react"
import { Link } from "gatsby"

export const Content = () => {
  return (
    <>
      <section className="c-section c-section--content">
        <div className="container">
          <h1 className="c-section__title">
            <span className="c-section__title c-section__title--blue">
              Lorem ipsum &nbsp;
            </span>
            dolor sit<br></br>ametconsectetur&nbsp;
            <span className="c-section__title c-section__title--blue">
              adipiscing
            </span>
          </h1>
          <div className="c-section__inner">
            <p className="c-section__subtitle">
              At vero eos et accusamus et iusto odio dignissimos ducimus!
            </p>
            <div className="c-section__list">
              - Totam rem aperiam eaque ipsa
            </div>
            <div className="c-section__list">
              - Sit voluptatem accusantium doloremque laudantium
            </div>
            <div className="c-section__list">
              - Sed ut perspiciatis, unde omnis iste natus error
            </div>
          </div>
          <div className="c-section__wrapper">
            <div className="c-section__button">
              <Link href="#" className="c-button c-button--base">
                заказать
              </Link>
            </div>
            <div className="c-section__button">
              <Link href="#" className="c-button c-button--white">
                подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
