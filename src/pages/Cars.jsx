import React, { useEffect, useState } from "react";
import Car from "../components/Car";

function Cars() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/anvarortiqov/FekaCarsdata/cars")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoad(false);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="product container">
      <h3 className="con-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id
        omnis quas harum corrupti.
      </h3>
      <p className="orange">Lorem ipsum dolor sit.</p>
      <div className="product-row row">
        {data &&
          data.map((car, index) => (
            <Car
              id={car.id}
              key={index}
              make={car.make}
              img={car.imgLink}
              price={car.price}
              engine={car.engine}
              year={car.year}
              model={car.model}
            />
          ))}
      </div>
    </div>
  );
}

export default Cars;
