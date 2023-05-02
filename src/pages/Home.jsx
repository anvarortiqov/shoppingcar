import React from 'react'
import {AiFillControl} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'
import {GiBuyCard} from 'react-icons/gi'
import Cart from '../components/Cart'
import Products from '../components/Products'
function Home() {
  return (
    <>
     <div className="head">
         <div className="head-content">
            
             <p className="suptitle orange">
                Lorem, ipsum dolor.
             </p>
             <h1 className="title head-title">
               Biz bilan o`zingizni yuksak darajada his qiling
             </h1>
         </div>
     </div>
     {/* preferenses */}
     <div className="pref row container">
        <div className="pref-card">
              <div className="pref-icon">
                     <IoMdSettings/>
              </div>
        
            <h3 className="pref-title">
                Lorem, ipsum.
            </h3> 
            <p className="pref-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis! Animi sit mollitia similique! Officia aliquid impedit vel dignissimos, eligendi quidem? Modi, unde?
            </p>
        </div>
        <div className="pref-card">
               <div className="pref-icon">
                     <GiBuyCard/>
              </div>
        
            <h3 className="pref-title">
                Lorem, ipsum.
            </h3> 
            <p className="pref-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis! Animi sit mollitia similique! Officia aliquid impedit vel dignissimos, eligendi quidem? Modi, unde?
            </p>
        </div>
        <div className="pref-card">
            <div className="pref-icon">
               <AiFillControl/>
            </div>
           
            <h3 className="pref-title">
                Lorem, ipsum.
            </h3> 
            <p className="pref-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis! Animi sit mollitia similique! Officia aliquid impedit vel dignissimos, eligendi quidem? Modi, unde?
            </p>
        </div>
     </div>
     <div className="about container row">
        <div className="about-i">
          <img src="https://funart.pro/uploads/posts/2021-04/1618357844_18-funart_pro-p-mashina-mersedes-bents-mashini-krasivo-fot-19.jpg"  alt="about-img" className='about-img'  />
        </div>
        <div className="about-content">
            <h2 className="about-title">
               Lorem ipsum dolor sit.
            </h2>
            <p className='text about-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consectetur dolor laboriosam, repellat facilis similique, aliquam atque, delectus minus doloremque voluptatum qui obcaecati non enim! Similique, esse! Totam, accusamus sunt.
            </p>
            <button className='btn'>Ko`proq o`qish</button>
        </div>

     </div>
     <div className="about container row">
       
        <div className="about-content">
            <h2 className="about-title">
               Lorem ipsum dolor sit.
            </h2>
            <p className='text about-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic consectetur dolor laboriosam, repellat facilis similique, aliquam atque, delectus minus doloremque voluptatum qui obcaecati non enim! Similique, esse! Totam, accusamus sunt.
            </p>
            <button className='btn'>Ko`proq o`qish</button>
        </div>
        <div className="about-i">
          <img src="https://tadviser.com/images/0/01/Mercedes-benz-c-class-2018-w205-amg-silver-new-c-class.jpg"  alt="about-img" className='about-img'  />
        </div>
     </div>
     <Products/>
     <div className="subcribe">
        <h3 className='subcribe-title'>Yangiliklarda birinchilardan bo`lib habardor bo`ling</h3>
        <form action="#" className='sub-form'>
           <input type="text" placeholder='Emailni kiriting' />
           <button className='btn'>Jo`natish</button>
        </form>
     </div>
  
    </>
  )
}

export default Home