import React from 'react'
import './Account.css';
import { TbWorld } from 'react-icons/tb';
import { PiCaretDownBold } from 'react-icons/pi';
import {BsFacebook}from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Sigin = () => {
  return (
    <>
      <div className='yemeksepeti__sigin-header'>
        <div className='yemeksepeti__sigin-header-logo'>
          <h4 className='yemeksepeti__sigin-header-logo-h4' >Yemeksepeti</h4>
        </div>
        <div className='yemeksepeti__sigin-header-language'>
          <TbWorld className='yemeksepeti__header-language-icon-world' />
          <h4 className='yemeksepeti__header-language-h4'>TR</h4>
          <PiCaretDownBold className='yemeksepeti__header-language-icon-caret' />



        </div>

      </div>

      <div className='yemeksepeti__sigin-home'>
        <div className='yemeksepeti__sigin-home-container'>
          <div className='yemeksepeti__sigin-home-container-header' >
            <h4 className='yemeksepeti__sigin-home-container-header-h4'>Hoş geldiniz!</h4>
            <p  className='yemeksepeti__sigin-home-container-header-p'>Devam etmek için kayıt ol  ya da giriş yap</p>
          </div>

          <div className='yemeksepeti__sigin-home-button'>
            <button className='yemeksepeti__sigin-home-btn1'><BsFacebook className='yemeksepeti__sigin-home-btn1-facebook'/>Facebook  ile Devam Et</button>
          </div>

          <div className='yemeksepeti__sigin-home-button' >
            <button className='yemeksepeti__sigin-home-btn2'> <img src='./assets/goog.png' className='yemeksepeti__sigin-home-btn1-google'/> Google  ile devam edin</button>
            
          </div>

          <div className='yemeksepeti__sigin-home-paragraph'>
            <p>ya da</p>
          </div>

          <div className='yemeksepeti__sigin-home-btn'>
            <button className='yemeksepeti__sigin-home-btn_1'>Giriş Yap</button>
          <Link to="/register"><button className='yemeksepeti__sigin-home-btn_2'>Kayıt Ol</button></Link>  
          </div>

        </div>

      </div>
    </>
  )
}

export default Sigin