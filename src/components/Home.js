import React, { useState } from "react";
import Btn_neon from "./Buttons/Btn_neon";
import Go_up_btn from "./Buttons/Go_up_btn";
import "./home.css";
import Term_and_conditions_modals from "./Modals/Term_and_conditions_modals.js";
import ImageSlider from "./ImageSlider/ImageSlider.js";
function Home() {
  const [show, setShow] = useState(true);

  const constainerCarousel = {
    width: "100%",
    height: "280px",
    margin: "0",
  };

  const handleClose = () => {
    console.log(show);
    setShow(false);
  };

  return (
    <>
      <div className="home">
        <h1>Benvenuto su</h1>
        <h1>M4M</h1>
        <div style={constainerCarousel} className="container-carousel">
          <ImageSlider />
        </div>
        <div className="up_btn">
          {/* <Go_up_btn /> */}
          {show && <Term_and_conditions_modals handleClose={handleClose} />}
        </div>
      </div>
      <div className="back"></div>
      <div className="presentation">
        <main>
          <section id="presentazione">
            <h1>Benvenuti nel mondo della musica</h1>
            <p>
              La nostra azienda è lieta di presentarvi una selezione unica di
              strumenti musicali, con un'attenzione particolare a quelli meno
              conosciuti ma altrettanto affascinanti. Da millenni, la musica è
              stata parte integrante della nostra vita e della nostra cultura,e
              noi siamo qui per celebrare la diversità e l'innovazione nel campo
              degli strumenti musicali.
            </p>
          </section>
          <section id="strumenti">
            <h2>Strumenti</h2>
            <p>
              Presso la nostra azienda, vogliamo stimolare la vostra curiosità e
              la vostra creatività offrendovi la possibilità di esplorare
              strumenti musicali poco convenzionali. Dalla kalimba africana al
              santoor persiano, passando per il sitar indiano e il theremin
              elettronico, ci sono molti tesori da scoprire che possono
              arricchire la vostra esperienza musicale in modi unici e
              sorprendenti.
            </p>
          </section>
          <section id="orizzontiSonori">
            <h2>Scopri nuovi orizzonti sonori</h2>
            <p>
              Con oltre 30 anni di esperienza nel settore musicale, siamo
              orgogliosi di offrire non solo una vasta gamma di strumenti
              musicali, ma anche un servizio clienti impeccabile. Il nostro team
              esperto è sempre disponibile per fornirvi consulenza e assistenza
              personalizzate, aiutandovi a trovare gli strumenti perfetti per le
              vostre esigenze musicali.
            </p>
          </section>
          <section id="comunita">
            <h2>Unisciti alla nostra comunità musicale</h2>
            <p>
              Siamo più di un negozio di strumenti musicali: siamo una comunità
              di appassionati di musica che condividono la stessa passione per
              l'arte e la creatività. Vi invitiamo a esplorare il nostro
              catalogo online e a unirvi a noi nel meraviglioso viaggio della
              musica.
            </p>{" "}
          </section>
          <section id="contatti">
            <h2>Contattateci</h2>
            <p>
              Se avete domande o volete ulteriori informazioni, non esitate a
              contattarci.
            </p>
          </section>
        </main>
        <Go_up_btn/>
      </div>
    </>
  );
}

export default Home;
