import React from "react"

import Layout from "../components/layout"

import Top from "../components/top"
import Menu from "../components/menu"
import Servicios from "../components/servicios"
import Galeria from "../components/galeria"
import Footer from "../components/footer"



const IndexPage = () => (
  <Layout>

    <Top></Top>
    <Menu></Menu>
    <Servicios></Servicios>
    <Galeria></Galeria>
    <Footer></Footer>

  </Layout>
)

export default IndexPage
