import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Benz() {
  const [data, setData] = useState();
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setFormSubmitted(false); // reset formSubmitted state when the popup is closed
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Telephone: ${telephone}`);
    handlePopupClose();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/anvarortiqov/FekaCarsdata/cars/${id}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div className="container benz">
      {data ? (
        <div>
          <div className="row benz-row">
            <div className="benz-img">
              <h2 className="cont-title">{data.variant}</h2>
              <p className="orange">{data.engine}</p>
              <img src={data.imgLink} alt="benz-img" className="ben-img" />
            </div>
            <div className="benz-content">
              <h3>Describe</h3>
              <ul className="benz-list">
                <li>Klass:{data.model}</li>
                <li>Price:{data.price}</li>
                <li>Transmiiya:{data.transmission}</li>
                <li>Yili:{data.year}</li>
                <li>Model:{data.model}</li>
              </ul>
              <p className="benz-text">{data.description}</p>
              <button className="btn" onClick={handleButtonClick}>
                Buyurtma berish
              </button>
              {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    {!formSubmitted ? (
                      <>
                        <h2>
                          Iltimos siz bilan bo`g`lanishimiz uchun telefon
                          raqamingizni qoldiring
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                          <div className="form-group">
                            <label htmlFor="name">Ism:</label>
                            <input
                              placeholder="ismingizni kiriting"
                              type="text"
                              id="name"
                              value={name}
                              onChange={handleNameChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="telephone">Telefon raqam:</label>
                            <input
                              type="tel"
                              placeholder="+998910000000"
                              id="telephone"
                              value={telephone}
                              onChange={handleTelephoneChange}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            onClick={() => {
                              setFormSubmitted(true);
                            }}>
                            Jo`natish
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <h2>Bizni tanlaganiz uchun raxmat</h2>
                        <p>{name} Tez orada siz bilan bo`glanamiz`.</p>
                      </>
                    )}
                    <button onClick={handlePopupClose} className="close-button">
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Benz;
