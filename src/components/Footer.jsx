import React from 'react'
import logo from '../assets/logo.png'
function Footer() {
  return (
    <footer className='footer'>
        <div className="container row">
            <div className="footer-col">
               <div className="footer--logo">
                    <img className='footer--img' src={logo} alt="" />
                    <span>Mersades.uz</span>
               </div>
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt illum nam quis beatae alias quibusdam reprehenderit blanditiis fugiat, sint est neque iusto suscipit porro quia id aut in. Non, magnam.
                </p>
                <div className="socials">

                </div>
            </div>
            <div className="footer-col">
                <h2 className='footer--title'>Section</h2>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Cars</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="footer-col">
                <h2  className='footer--title'>Tell me</h2>
                <ul>
                    <li>
                        <a href="#">+99890000000</a>
                    </li>
                    <li>
                        <a href="#">mersadesuz@gmail.com</a>
                    </li>
                    <li>
                        <a href="#">Namangan City Chust street 15</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer