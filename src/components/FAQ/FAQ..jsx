import { useEffect, useRef, useState } from "react";
import arrow from '../../images/arrow.png'
import "./FAQ.css";
import { useLocation } from "react-router-dom";

const FAQ = () => {
  const Preguntas = [
    {
      title: "¿Hacen el diseño web?",
      res: "Si, ofrecemos un plan con diseño personalizado, donde tendremos en cuenta las características de tu marca para transmitir en tu página web exactamente lo que deseas, el objetivo de realizar nosotros mismos el diseño es darte una plataforma unica y util para tus clientes",
      index: 0
    },
    {
      title: "¿Qué es un diseño responsive?",
      res: "El diseño responsive es aquel que permite que tu página  web se vea en cualquier dispositivo. En Webcode nos encargamos de entregarte un diseño para desktop, laptop, tablet y teléfono, para que tus clientes esten comodos desde cualquier dispositivo",
      index: 1
    },
    {
      title: "¿Cómo trabajan?",
      res: "Somos una empresa online, trabajamos de manera remota según la disponibilidad del cliente, al tener toda la idea clara con el cliente del objetivo de la plataforma, se procede primero hacer el diseño, al tener el diseño listo y aprobado por el cliente se hace el desarrollo web y se sube al host que se haya acordado",
      index: 2
    },
    {
      title: "¿Se encargan del posicionamiento?",
      res: "Si, tenemos un plan en específico donde nos encargamos del SEO de la plataforma para asegurarnos que tu página web llegue a más personas y asegurarte un mejor posicionamiento",
      index: 3
    },
    {
      title: "Planea",
      res: "Tenemos varios planes para que escojas el que se ajuste mas a ti, aquí puedes ver todos los planes de nuestra empresa",
      index: 4
    },
  ];

  const location = useLocation();
  const faqRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [shouldUpdateUrl, setShouldUpdateUrl] = useState(true);

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const index = parseInt(urlParams.get('index'));
    if (!isNaN(index)) {
      setOpenIndex(index);
      if (faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (shouldUpdateUrl && openIndex !== null) {
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('index', openIndex.toString());
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [openIndex, shouldUpdateUrl, location.search]);

  const handleToggleOpen = (index) => {
    setShouldUpdateUrl(false);
    toggleOpen(index);
  };

  return (
    <div className="containerFAQ" ref={faqRef}>
      <h3 className="titleFAQ" >Preguntas frecuentes</h3>
      {Preguntas.map((item, index) => (
        <div
          key={index}
          className={`selectPackages ${openIndex === index ? "openPack" : ""}`}
          onClick={() => handleToggleOpen(index)}
          style={{
            borderTopLeftRadius: index === 0 ? "15px" : "0",
            borderTopRightRadius: index === 0 ? "15px" : "0",
            borderBottomLeftRadius: index === Preguntas.length - 1 ? "15px" : "0",
            borderBottomRightRadius: index === Preguntas.length - 1 ? "15px" : "0",
          }}
        >
          <div className="selectedOptionPackages">
            <p className="titleSelect">{item.title}</p>
            <img
              className={`arrowFAQ ${openIndex === index ? "rotateArrow" : ""}`}
              src={arrow}
              alt=""
            />
          </div>
          {openIndex === index && (
            <div className="textSelect">
              <p className="textSelectFAQ">
                {item.res}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;