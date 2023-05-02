import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Cart from './Cart'

function Products() {
  const [data,setData]=useState()
  const [load,setLoad]=useState(true)
 

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/anvarortiqov/FekaCarsdata/cars")
        .then((res)=>res.json())
        .then((json)=>{
            setData(json)
            setLoad(false)
        })
        .catch(error => console.error(error));
  })
 
  return (
    <div className='product container'>
        <h3>Biz bilan zamonaviylikni his eting</h3>
        <p className='orange'>
            Lorem ipsum dolor sit.
        </p>
        <div className="product-row row">
        {
            data && data.slice(0, 6).map((car,index) => (
                <Cart 
                    key={index}
                     make={car.make}
                     img={car.imgLink}
                     price={car.price}
                     engine={car.engine}
                     year={car.year}
                     model={car.model}
                     />
              ))
        }
        </div>
    </div>
  )
}

export default Products