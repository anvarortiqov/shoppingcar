import React from "react";

function Contact() {
  return (
    <div className="contact container">
      <h2 className="con-title">Biz bilan bog`lanish</h2>
      <p className="orange">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint et iure
        cupiditate labore minus debitis!
      </p>
      <div className="row">
        <div className="contact-info">
          <div className="cont">
            <h4 className="cont-title">Adres</h4>
            <p className="cont-text">
              Uzbekistan Namangan region Chust city Central street N1
            </p>
          </div>
          <div className="cont">
            <h4 className="cont-title">Ish vaqti</h4>
            <p className="cont-text">
              Dushanbadan-Shanbagacha 9:00-18:00 gacha
            </p>
          </div>
          <div className="cont">
            <h4 className="cont-title">Telefon</h4>
            <p className="cont-text">+99891 0000000</p>
          </div>
          <div className="cont">
            <h4 className="cont-title">Pochta</h4>
            <p className="cont-text">mersadesuz2023@gmail.com</p>
          </div>
        </div>
        <div className="cont-map">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Namangan%20Chust+(Mersades%20uz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
