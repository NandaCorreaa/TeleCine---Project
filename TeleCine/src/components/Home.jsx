import React from "react";
import Header from "./Header";
import Carousel from "./Carousel"
import Sobre from "./Sobre"
import Sucessos from "./Sucessos"
import Parceiros from "./Parceiros"
import PlanoTeleCine from "./PlanoTeleCine"
import MomentoCinema from "./MomentoCinema"
import Telegram from "./Telegram"
import Duvidas from "./Duvidas"
import Footer from "./Footer"

export default function Home() {
  return(
    <>
    <Header/>
    <Carousel/>
    <Sobre/>
    <Sucessos/>
    <Parceiros/>
    <PlanoTeleCine/>
    <MomentoCinema/>
    <Telegram/>
    <Duvidas/>
    <Footer/>
    </>
  )
}