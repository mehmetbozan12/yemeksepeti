import React, { useState } from 'react'
import './Register.css'
import { TbWorld } from 'react-icons/tb';
import { PiCaretDownBold } from 'react-icons/pi';

const Register = () => {
const [email , setEmail] = useState("");

const handleEmailChange = (e) =>{
  setEmail(e.target.value);
};

const isGmail = email.endsWith('@gmail.com') ? 'red' : '';
const buttonColor = isGmail ? 'red' : '';

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
      <div className='yemeksepeti__register-menu'>
        <div className='yemeksepeti__register-container'>
            <div>
                <img className='yemeksepeti__register-container-img' src="./assets/posta.png" alt="" />
            </div>
            <div className='yemeksepeti__register-container-text'>
             <h4 className='yemeksepeti__register-container-text-h4'>E-posta adresiniz nedir?</h4>
             <p  className='yemeksepeti__register-container-text-p'>Kayıtlı bir hesabınız olup olmadığını kontrol edeceğiz</p>
             </div>
             <div className='yemeksepeti__register-container-form'>
                <input className='yemeksepeti__register-container-form-input' placeholder='E-posta' type='email' value={email} onChange={handleEmailChange}/>
                <button className={`custom-button ${isGmail ? 'hoverable' : ''}`} style={{ backgroundColor: buttonColor}}>Devam Et</button>
             </div>
        </div>

      </div>
    </>
  )
}

export default Register;