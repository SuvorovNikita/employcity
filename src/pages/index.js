import React from "react"

import photo from "../assets/img/photo/photo.png"

import "../styles/index.scss"

import Header from "../components/Header/Header"

import Order from "../components/Order/Order"
import Footer from "../components/Footer/Footer"
import { Content } from "../components/Content/Content"

const IndexPages = () => {
  return (
    <>
      <Header />
      <main
        className="c-section c-section--main c-section--hero"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <Content />
        <Order />
      </main>
      <Footer />
    </>
  )
}

export default IndexPages
