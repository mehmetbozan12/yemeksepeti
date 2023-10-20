import React from 'react'
import './Home.css';
import { TbWorld } from 'react-icons/tb';
import { PiCaretDownBold } from 'react-icons/pi';
import { CiGps } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { FiFacebook } from 'react-icons/fi';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { SlSocialLinkedin } from 'react-icons/sl';
import {GiCheckMark} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='yemeksepeti__home'>

            {/* Header Start */}
            <div className='yemeksepeti__header'>
                <div className='yemeksepeti__header-logo'>
                    <h6 className='yemeksepeti__header-logo-h1'>Yemeksepeti</h6>
                </div>

                <div className='yemeksepeti__header-buttons-language'>
                    <div className='yemeksepeti__header-button'>
                      <Link to="Account"><button className='yemeksepeti__header-button-sigin'> Giris Yap</button> </Link>
                      <Link to="sigup"><button className='yemeksepeti__header-button-sigup'>Kayıt Ol</button></Link>   
                    </div>
                    <div className='yemeksepeti__header-language'>
                        <TbWorld className='yemeksepeti__header-language-icon-world' />
                        <h4 className='yemeksepeti__header-language-h4'>TR</h4>
                        <PiCaretDownBold className='yemeksepeti__header-language-icon-caret' />
                    </div>

                    <div className='yemeksepeti__header-shopping'>

                        <svg aria-hidden="true" focusable="false" class="fl-brand-primary" width="24" height="24" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill='#FA0050' fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.0021 2C14.5418 2 16.4241 3.6512 16.5538 6.15854H19.8491C20.4014 6.15854 20.8491 6.60625 20.8491 7.15854C20.8491 7.20585 20.8457 7.25311 20.8391 7.29996L19.1248 19.1414C19.0544 19.6341 18.6325 20 18.1348 20H5.86942C5.37176 20 4.94984 19.6341 4.87947 19.1414L3.16518 7.29996C3.08707 6.75322 3.46697 6.24669 4.0137 6.16859C4.06055 6.16189 4.10781 6.15854 4.15513 6.15854L7.36129 6.16397C7.49108 3.65663 9.46248 2 12.0021 2ZM17.5607 16.25H6.44235C6.22143 16.25 6.04235 16.4291 6.04235 16.65C6.04235 16.669 6.04369 16.6879 6.04638 16.7067L6.25397 18.1567C6.28217 18.3537 6.45092 18.5 6.64993 18.5H17.3533C17.5523 18.5 17.7211 18.3537 17.7492 18.1566L17.9567 16.7066C17.988 16.488 17.836 16.2853 17.6174 16.254C17.5986 16.2513 17.5797 16.25 17.5607 16.25ZM18.8109 7.65854H5.19233C4.97142 7.65854 4.79233 7.83762 4.79233 8.05854C4.79233 8.32251 4.79367 8.09637 4.79635 8.11511L5.71793 14.4066C5.74609 14.6036 5.91486 14.75 6.11391 14.75H17.8891C18.0882 14.75 18.2569 14.6036 18.2851 14.4066L19.2069 8.11513C19.2381 7.89643 19.0862 7.69381 18.8675 7.66256C18.8487 7.65988 18.8298 7.65854 18.8109 7.65854ZM12.0021 3.40323C10.4163 3.40323 9.15495 4.32251 8.91234 5.80175C8.88507 5.96802 8.98943 6.12701 9.15495 6.15854C9.17377 6.16212 9.19289 6.16392 9.21204 6.1639L14.7134 6.15847C14.8772 6.15843 15.0099 6.02566 15.0099 5.86189C15.0099 5.84361 14.9631 5.82209 15.0049 5.80742C14.655 4.32251 13.5918 3.40323 12.0021 3.40323Z">
                            </path></svg>


                    </div>

                </div>

            </div>

            {/* Header finish */}


            {/* Menu Start */}

            <div className='yemeksepeti__menu'>

                <div className='yemeksepeti__menu-adress'>

                    <div className='yemeksepeti__menu-adress-h1-btn'>
                        <p className='yemeksepeti__menu-adress-p'>Yemek ya da market, tüm ihtiyaçların kapında!</p>
                        <div className='yemeksepeti__menu-adress-input-button'>

                            <input className='yemeksepeti__menu-adress-input' placeholder='Adresini Belirle veya Seç' />
                          {/* <CiGps className='yemeksepeti__menu-adress-gps' />  */} 


                            <button className='yemeksepeti__menu-adress-btn' >Keşfet</button>
                        </div>
                    </div>
                    <div className='yemeksepeti__menu-adress-image'>
                        <img className='yemeksepeti__menu-adress-img' src='https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-tr.png?width=1264' />
                    </div>

                </div>

            </div>

            {/* Menu finish */}


            {/* bussines start */}

            <div className='business__partner'>
                <div className='business__partner-p'>
                    <p>Restoran veya Mahalle esnafı iş ortağımız olun</p>
                </div>
                <div className='business__partner-image'>
                    <img className='business__partner-img' src='https://images.deliveryhero.io/image/foodpanda/home-vendor-tr.jpg?width=1519&height=430' />
                    <div className='business__partner-description'>
                        <p className=' business__partner-p1'>Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın</p>
                        <p className=' business__partner-p2'>Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
                            işletmenizden sipariş <br /> verebilecek. Bir ev, bir plaza, bir işyeri ya da üniversite kampüsü, hizmet <br /> vermek istediğiniz kim varsa artık müşteriniz.
                        </p>
                        <p className=' business__partner-p2'>Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz yapabiliyorsunuz,
                            dilerseniz Yemeksepeti sizin <br /> adınıza kullanıcıya ulaştırıyor.</p>
                        <p className=' business__partner-p2'> Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş ortaklarımızdan <br /> biri olabilirsiniz.</p>
                        <button className='business__partner-btn'>Başlayalım</button>
                    </div>
                    <div className='business__city'>
                        <p className='business__city-p'>Türkiye'nin her şehrindeyiz!</p>
                        <div className='business__city-image'>
                            <div >
                                <img className='businnes__city-img' src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-ankara.jpg?width=300" alt="ankara" />
                                <button className='business__city-image-img-name'>Ankara</button>
                            </div>
                            <div>
                                <img className='businnes__city-img' src="	https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-antalya.jpg?width=300" alt="antalya" />
                                <button className='business__city-image-img-name'>Antalya</button>
                            </div>
                            <div>
                                <img className='businnes__city-img' src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-bursa.jpg?width=300" alt="bursa" />
                                <button className='business__city-image-img-name'>Bursa</button>
                            </div>
                            <div>
                                <img className='businnes__city-img' src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-istanbul.jpg?width=300" alt="istanbul" />
                                <button className='business__city-image-img-name'>İstanbul</button>
                            </div>
                            <div>
                                <img className='businnes__city-img' src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-izmir.jpg?width=300" alt="izmir" />
                                <button className='business__city-image-img-name-izmir'>İzmir</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* business finish */}

            <div className='yemeksepeti__footer'>
                <p className='yemeksepeti__footer-p1'>Mobil uygulamamızı indirin</p>
                <div className='yemeksepeti__footer-app'>
                    <div className='yemeksepeti__footer-download'>
                        <p className='yemeksepeti__footer-p2'>Yemek ve market ihtiyaçlarının tamamı için hemen indir!</p>
                        <div>
                            <div className='yemeksepeti__footer-qr-p'>
                                <div className='yemeksepeti__footer-qr'>
                                    <img className='yemeksepeti__footer-qr-img' src='https://images.deliveryhero.io/image/foodpanda/homepage/trhomepageqrcode.png' />
                                </div>
                                <p className='yemeksepeti__footer-p3'>Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların dakikalar
                                    içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup siparişini ver,
                                    online ya da kapıda dilediğin gibi öde.</p>
                            </div>

                        </div>
                        <div className='yemeksepeti__footer-download-btn'>
                            <a href="https://utsh.adj.st/?adj_t=12d0wowa&amp;adj_deep_link=yemeksepeti%3A%2F%2F%3F&amp;adj_campaign=tr_homepage_ios&amp;wssid=1698007190211.866620242441334300.e219a7ffw1" target="_blank" class="apple-store" aria-label="apple-store" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="40"><g fill="none"><path fill="#A9AAA9" d="M110.443 0H9.562c-.368 0-.731 0-1.098.002-.307.002-.612.008-.922.013-.668.016-1.343.057-2.01.176a6.462 6.462 0 0 0-4.711 3.43 6.623 6.623 0 0 0-.626 1.905C.075 6.19.032 6.861.015 7.53c-.009.308-.01.616-.015.922v23.139c.005.31.006.611.015.921.017.671.06 1.342.18 2.004.117.671.314 1.3.626 1.907a6.24 6.24 0 0 0 1.183 1.616 6.293 6.293 0 0 0 1.622 1.18c.612.312 1.236.51 1.906.632.667.119 1.342.158 2.01.176.31.007.615.011.922.011.367.002.73.002 1.098.002h100.881c.362 0 .727 0 1.087-.002.307 0 .62-.004.926-.011.672-.018 1.346-.057 2.005-.176a6.854 6.854 0 0 0 1.914-.632 6.328 6.328 0 0 0 1.622-1.18c.477-.47.875-1.02 1.184-1.616a6.563 6.563 0 0 0 .62-1.907c.125-.662.163-1.333.188-2.004.003-.31.003-.611.003-.921.008-.365.008-.726.008-1.096V9.545c0-.366 0-.73-.008-1.093 0-.306 0-.614-.003-.922-.025-.67-.063-1.34-.188-2.004a6.58 6.58 0 0 0-.62-1.904 6.489 6.489 0 0 0-2.806-2.803A6.845 6.845 0 0 0 114.46.19c-.66-.119-1.333-.16-2.005-.176-.306-.005-.619-.011-.926-.013C111.17 0 110.805 0 110.443 0"></path><path fill="#000" d="M8.469 39.164c-.306 0-.604-.004-.907-.01-.561-.016-1.226-.048-1.875-.164a5.889 5.889 0 0 1-1.66-.549 5.388 5.388 0 0 1-1.402-1.017 5.335 5.335 0 0 1-1.024-1.398 5.75 5.75 0 0 1-.544-1.659C.935 33.694.904 33.011.89 32.49a76.244 76.244 0 0 1-.015-.913V8.452s.01-.691.015-.894c.014-.525.045-1.208.166-1.874a5.724 5.724 0 0 1 .545-1.664 5.343 5.343 0 0 1 1.018-1.4 5.583 5.583 0 0 1 3.064-1.568c.676-.12 1.36-.151 1.881-.164L8.47.876h103.056l.916.013c.514.012 1.2.043 1.864.162a5.987 5.987 0 0 1 1.676.549c.514.263.985.606 1.395 1.017a5.54 5.54 0 0 1 1.027 1.405 5.8 5.8 0 0 1 .537 1.65c.115.632.151 1.28.174 1.89.003.283.003.588.003.89.009.376.009.733.009 1.094v20.95c0 .363 0 .718-.01 1.076 0 .325 0 .623-.003.93-.022.59-.058 1.238-.172 1.855a5.75 5.75 0 0 1-.541 1.672c-.27.52-.614.99-1.018 1.387-.415.419-.886.76-1.403 1.023a5.883 5.883 0 0 1-1.674.55c-.642.117-1.307.15-1.874.164-.293.007-.602.011-.9.011l-1.088.002L8.47 39.164"></path><path fill="#FFFFFE" d="M24.839 20.321c-.026-2.753 2.258-4.094 2.363-4.157-1.293-1.882-3.3-2.139-4.003-2.159-1.684-.177-3.316 1.006-4.175 1.006-.874 0-2.195-.989-3.618-.959-1.831.028-3.546 1.087-4.485 2.73-1.94 3.352-.493 8.278 1.364 10.987.93 1.327 2.016 2.81 3.438 2.756 1.39-.057 1.91-.885 3.59-.885 1.663 0 2.15.885 3.6.852 1.492-.024 2.433-1.333 3.33-2.672 1.074-1.52 1.506-3.02 1.523-3.095-.035-.012-2.9-1.102-2.927-4.404m-2.74-8.098c.748-.934 1.26-2.204 1.118-3.494-1.083.048-2.437.747-3.217 1.661-.69.805-1.306 2.124-1.147 3.365 1.216.09 2.466-.613 3.246-1.532M42.42 27.167h-4.746l-1.14 3.36h-2.01l4.496-12.43h2.09l4.495 12.43H43.56z"></path><path fill="#000" d="M38.166 25.617h3.762l-1.855-5.453h-.05z"></path><path fill="#FFFFFE" d="M55.315 25.996c0 2.816-1.51 4.626-3.79 4.626-1.293 0-2.32-.578-2.856-1.586h-.043v4.488h-1.864v-12.06h1.804v1.507h.034c.519-.972 1.624-1.602 2.891-1.602 2.305 0 3.824 1.818 3.824 4.627z"></path><path fill="#000" d="M53.4 25.996c0-1.835-.951-3.041-2.4-3.041-1.424 0-2.382 1.231-2.382 3.041 0 1.826.958 3.049 2.382 3.049 1.449 0 2.4-1.198 2.4-3.049z"></path><path fill="#FFFFFE" d="M65.307 25.996c0 2.816-1.51 4.626-3.789 4.626-1.293 0-2.32-.578-2.856-1.586h-.043v4.488h-1.864v-12.06h1.804v1.507h.034c.519-.972 1.623-1.602 2.891-1.602 2.305 0 3.823 1.818 3.823 4.627z"></path><path fill="#000" d="M63.391 25.996c0-1.835-.95-3.041-2.398-3.041-1.424 0-2.382 1.231-2.382 3.041 0 1.826.958 3.049 2.382 3.049 1.449 0 2.398-1.198 2.398-3.049z"></path><path fill="#FFFFFE" d="M71.912 27.063c.138 1.233 1.338 2.042 2.977 2.042 1.571 0 2.701-.809 2.701-1.92 0-.966-.682-1.543-2.295-1.939l-1.615-.388c-2.286-.552-3.348-1.619-3.348-3.352 0-2.144 1.873-3.617 4.532-3.617 2.631 0 4.435 1.473 4.495 3.617h-1.881c-.112-1.24-1.14-1.989-2.64-1.989-1.503 0-2.53.758-2.53 1.86 0 .88.656 1.397 2.262 1.793l1.372.335c2.555.604 3.617 1.628 3.617 3.447 0 2.325-1.856 3.782-4.808 3.782-2.761 0-4.627-1.423-4.747-3.671h1.908M83.58 19.32v2.143h1.727v1.474H83.58v4.996c0 .777.346 1.138 1.105 1.138.19 0 .492-.026.613-.043v1.464c-.207.053-.62.087-1.035.087-1.838 0-2.555-.69-2.555-2.447v-5.195h-1.32v-1.474h1.32V19.32h1.872m2.727 6.676c0-2.852 1.682-4.644 4.306-4.644 2.632 0 4.307 1.792 4.307 4.644 0 2.859-1.666 4.643-4.307 4.643-2.64 0-4.306-1.784-4.306-4.643z"></path><path fill="#000" d="M93.02 25.996c0-1.956-.897-3.111-2.407-3.111s-2.407 1.163-2.407 3.111c0 1.964.896 3.11 2.407 3.11 1.51 0 2.407-1.146 2.407-3.11z"></path><path fill="#FFFFFE" d="M96.456 21.463h1.778v1.543h.043c.285-1.025 1.113-1.637 2.183-1.637.268 0 .492.035.64.07v1.74c-.148-.06-.476-.113-.838-.113-1.2 0-1.942.81-1.942 2.085v5.375h-1.864v-9.063m13.235 6.402c-.25 1.645-1.855 2.774-3.909 2.774-2.641 0-4.28-1.766-4.28-4.6 0-2.843 1.648-4.687 4.202-4.687 2.512 0 4.091 1.723 4.091 4.47v.638h-6.413v.113c0 1.55.976 2.566 2.443 2.566 1.035 0 1.847-.49 2.097-1.274h1.77z"></path><path fill="#000" d="M103.391 25.16h4.54c-.044-1.387-.932-2.3-2.227-2.3-1.286 0-2.217.93-2.313 2.3z"></path><path fill="#FFFFFE" d="M37.932 8.74c1.775 0 2.816 1.088 2.816 2.968 0 1.908-1.033 3.005-2.816 3.005h-2.16V8.74h2.16z"></path><path fill="#000" d="M36.7 13.868h1.129c1.251 0 1.972-.778 1.972-2.148 0-1.35-.733-2.136-1.972-2.136H36.7v4.284z"></path><path fill="#FFFFFE" d="M41.798 12.456c0-1.452.812-2.338 2.131-2.338 1.315 0 2.128.886 2.128 2.338 0 1.462-.81 2.344-2.128 2.344-1.323 0-2.131-.882-2.131-2.344z"></path><path fill="#000" d="M45.14 12.456c0-.977-.44-1.547-1.211-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.771 0 1.211-.572 1.211-1.553z"></path><path fill="#FFFFFE" d="M51.718 14.713h-.925l-.932-3.32h-.072l-.928 3.32h-.916L46.7 10.205h.904l.809 3.44h.067l.928-3.44h.855l.928 3.44h.07l.806-3.44h.891l-1.24 4.508m2.287-4.508h.858v.716h.066c.22-.5.668-.803 1.348-.803 1.007 0 1.563.604 1.563 1.677v2.918h-.892v-2.695c0-.725-.314-1.085-.974-1.085-.66 0-1.078.44-1.078 1.142v2.638h-.89v-4.508m5.254 4.508h.891V8.445h-.891zm2.13-2.257c0-1.452.812-2.338 2.13-2.338 1.316 0 2.129.886 2.129 2.338 0 1.462-.81 2.344-2.128 2.344-1.323 0-2.131-.882-2.131-2.344z"></path><path fill="#000" d="M64.732 12.456c0-.977-.44-1.547-1.211-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.771 0 1.211-.572 1.211-1.553z"></path><path fill="#FFFFFE" d="M66.587 13.437c0-.81.605-1.279 1.68-1.345l1.223-.07v-.39c0-.475-.315-.744-.924-.744-.497 0-.842.182-.942.5h-.862c.091-.773.82-1.27 1.845-1.27 1.132 0 1.77.563 1.77 1.515v3.08h-.857v-.634h-.072c-.268.451-.762.708-1.355.708-.87 0-1.506-.526-1.506-1.35z"></path><path fill="#000" d="M69.49 13.053v-.377l-1.103.07c-.621.042-.903.253-.903.65 0 .406.352.642.836.642.672 0 1.17-.426 1.17-.985z"></path><path fill="#FFFFFE" d="M71.548 12.456c0-1.424.734-2.326 1.875-2.326.618 0 1.14.294 1.384.79h.068V8.446h.89v6.268h-.853V14h-.071c-.27.493-.797.787-1.418.787-1.149 0-1.875-.902-1.875-2.33z"></path><path fill="#000" d="M72.469 12.456c0 .956.451 1.532 1.206 1.532.751 0 1.216-.584 1.216-1.528 0-.939-.47-1.531-1.216-1.531-.75 0-1.206.58-1.206 1.527z"></path><path fill="#FFFFFE" d="M79.452 12.456c0-1.452.814-2.338 2.131-2.338 1.315 0 2.128.886 2.128 2.338 0 1.462-.809 2.344-2.128 2.344-1.321 0-2.13-.882-2.13-2.344z"></path><path fill="#000" d="M82.795 12.456c0-.977-.44-1.547-1.212-1.547-.775 0-1.21.57-1.21 1.547 0 .985.435 1.553 1.21 1.553.772 0 1.212-.572 1.212-1.553z"></path><path fill="#FFFFFE" d="M84.908 10.205h.857v.716h.066c.22-.5.668-.803 1.348-.803 1.008 0 1.563.604 1.563 1.677v2.918h-.891v-2.695c0-.725-.315-1.085-.975-1.085-.659 0-1.078.44-1.078 1.142v2.638h-.89v-4.508m8.87-1.122v1.142h.978v.75h-.978v2.317c0 .473.195.68.638.68.138 0 .216-.01.34-.021v.74a2.875 2.875 0 0 1-.485.047c-.99 0-1.385-.349-1.385-1.218v-2.545h-.717v-.75h.717V9.083h.892m2.196-.638h.883v2.484h.07c.219-.505.696-.807 1.377-.807.962 0 1.556.609 1.556 1.68v2.91h-.893v-2.69c0-.72-.336-1.085-.966-1.085-.73 0-1.137.46-1.137 1.143v2.633h-.89V8.445m5.946 3.598h2.282c-.021-.708-.453-1.168-1.112-1.168-.66 0-1.12.464-1.17 1.168z"></path><path fill="#FFFFFE" d="M105.055 13.495c-.202.808-.924 1.305-1.956 1.305-1.294 0-2.086-.886-2.086-2.328 0-1.44.81-2.354 2.082-2.354 1.256 0 2.014.857 2.014 2.272v.31h-3.189v.05c.03.79.49 1.292 1.203 1.292.54 0 .91-.195 1.075-.547h.857z"></path></g></svg></a>
                            <a href="https://utsh.adj.st/?adj_t=12e25dhg&amp;adj_deep_link=yemeksepeti%3A%2F%2F%3F&amp;adj_campaign=tr_homepage_android&amp;wssid=1698007190211.866620242441334300.e219a7ffw1" target="_blank" class="play-store" aria-label="play-store" rel="noreferrer"><svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="61.043%" y1="4.97%" x2="26.517%" y2="71.939%" id="a"><stop stop-color="#00A0FF" offset="0%"></stop><stop stop-color="#00A1FF" offset=".657%"></stop><stop stop-color="#00BEFF" offset="26.01%"></stop><stop stop-color="#00D2FF" offset="51.22%"></stop><stop stop-color="#00DFFF" offset="76.04%"></stop><stop stop-color="#00E3FF" offset="100%"></stop></linearGradient><linearGradient x1="107.604%" y1="50.085%" x2="-130.554%" y2="50.085%" id="b"><stop stop-color="#FFE000" offset="0%"></stop><stop stop-color="#FFBD00" offset="40.87%"></stop><stop stop-color="orange" offset="77.54%"></stop><stop stop-color="#FF9C00" offset="100%"></stop></linearGradient><linearGradient x1="86.25%" y1="30.901%" x2="-50.108%" y2="135.959%" id="c"><stop stop-color="#FF3A44" offset="0%"></stop><stop stop-color="#C31162" offset="100%"></stop></linearGradient><linearGradient x1="-18.781%" y1="-11.805%" x2="42.11%" y2="35.108%" id="d"><stop stop-color="#32A071" offset="0%"></stop><stop stop-color="#2DA771" offset="6.85%"></stop><stop stop-color="#15CF74" offset="47.62%"></stop><stop stop-color="#06E775" offset="80.09%"></stop><stop stop-color="#00F076" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero"><path d="M130 0H5C2.25 0 0 2.25 0 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5z" fill="#A6A6A6"></path><path d="M130 .8a4.2 4.2 0 014.2 4.2v30a4.2 4.2 0 01-4.2 4.2H5A4.2 4.2 0 01.8 35V5A4.2 4.2 0 015 .8h125" fill="#000"></path><path d="M47.42 10.24c0 .84-.25 1.51-.75 2-.56.59-1.3.89-2.2.89-.87 0-1.6-.3-2.21-.9-.61-.6-.91-1.35-.91-2.23 0-.89.3-1.63.91-2.23.61-.6 1.34-.9 2.21-.9.43 0 .84.08 1.23.25.39.17.7.39.94.67l-.53.53c-.4-.47-.94-.71-1.64-.71-.63 0-1.18.22-1.64.67-.46.44-.69 1.02-.69 1.73s.23 1.29.69 1.73c.46.44 1.01.67 1.64.67.67 0 1.23-.22 1.68-.67.29-.29.46-.7.5-1.22h-2.18V9.8h2.91c.02.14.04.29.04.44zM52.03 7.73H49.3v1.9h2.46v.72H49.3v1.9h2.73v.74h-3.5v-6h3.5zM55.28 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13zM59.94 13V7h.77v6zM64.13 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13zM73.61 12.22c-.59.61-1.32.91-2.2.91-.88 0-1.61-.3-2.2-.91-.59-.61-.88-1.35-.88-2.22 0-.88.29-1.62.88-2.22.59-.61 1.32-.91 2.2-.91.87 0 1.6.3 2.2.91.59.61.89 1.35.89 2.22-.01.87-.3 1.61-.89 2.22z" stroke="#FFF" stroke-width=".2" fill="#FFF"></path><path d="M69.78 11.72c.44.45.99.67 1.63.67.64 0 1.19-.22 1.63-.67.44-.45.67-1.02.67-1.72s-.22-1.27-.67-1.72c-.44-.45-.99-.67-1.63-.67-.64 0-1.19.22-1.63.67-.44.45-.67 1.02-.67 1.72s.22 1.27.67 1.72z" stroke="#FFF" stroke-width=".2" fill="#000"></path><path stroke="#FFF" stroke-width=".2" fill="#FFF" d="M75.57 13V7h.94l2.92 4.67h.03l-.03-1.16V7h.77v6h-.8l-3.05-4.89h-.04l.03 1.16v3.74h-.77z"></path><path d="M68.13 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.91-4.25-4.27-4.25z" fill="#FFF"></path><path d="M68.13 28.58c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58z" fill="#000"></path><path d="M58.82 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25z" fill="#FFF"></path><path d="M58.82 28.58c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58z" fill="#000"></path><path d="M47.74 23.05v1.8h4.32c-.13 1.01-.47 1.76-.98 2.27-.63.63-1.61 1.32-3.33 1.32-2.66 0-4.74-2.14-4.74-4.8 0-2.66 2.08-4.8 4.74-4.8 1.43 0 2.48.56 3.25 1.29l1.27-1.27c-1.08-1.03-2.51-1.82-4.53-1.82-3.64 0-6.7 2.96-6.7 6.61 0 3.64 3.06 6.61 6.7 6.61 1.97 0 3.45-.64 4.61-1.85 1.19-1.19 1.56-2.87 1.56-4.22 0-.42-.03-.81-.1-1.13h-6.07v-.01zM93.05 24.45c-.35-.95-1.43-2.71-3.64-2.71-2.19 0-4.01 1.72-4.01 4.25 0 2.38 1.8 4.25 4.22 4.25 1.95 0 3.08-1.19 3.54-1.88l-1.45-.97c-.48.71-1.14 1.18-2.09 1.18s-1.63-.44-2.06-1.29l5.69-2.35-.2-.48z" fill="#FFF"></path><path d="M87.25 25.87c-.05-1.64 1.27-2.48 2.22-2.48.74 0 1.37.37 1.58.9l-3.8 1.58z" fill="#000"></path><path fill="#FFF" d="M82.63 30h1.87V17.5h-1.87zM79.57 22.7h-.06c-.42-.5-1.22-.95-2.24-.95-2.13 0-4.08 1.87-4.08 4.27 0 2.38 1.95 4.24 4.08 4.24 1.01 0 1.82-.45 2.24-.97h.06v.61c0 1.63-.87 2.5-2.27 2.5-1.14 0-1.85-.82-2.14-1.51l-1.63.68c.47 1.13 1.71 2.51 3.77 2.51 2.19 0 4.04-1.29 4.04-4.43v-7.64h-1.77v.69z"></path><path d="M77.42 28.58c-1.29 0-2.37-1.08-2.37-2.56 0-1.5 1.08-2.59 2.37-2.59 1.27 0 2.27 1.1 2.27 2.59 0 1.48-.99 2.56-2.27 2.56z" fill="#000"></path><path d="M101.8 17.49h-4.47v12.5h1.87v-4.74h2.61c2.07 0 4.1-1.5 4.1-3.88s-2.04-3.88-4.11-3.88z" fill="#FFF"></path><path d="M101.85 23.52H99.2v-4.29h2.65c1.4 0 2.19 1.16 2.19 2.14 0 .98-.79 2.15-2.19 2.15z" fill="#000"></path><path d="M113.38 21.72c-1.35 0-2.75.6-3.33 1.91l1.66.69c.35-.69 1.01-.92 1.7-.92.97 0 1.95.58 1.96 1.61v.13c-.34-.19-1.06-.48-1.95-.48-1.79 0-3.6.98-3.6 2.81 0 1.67 1.46 2.75 3.1 2.75 1.25 0 1.95-.56 2.38-1.22h.06v.97h1.8v-4.79c.02-2.22-1.64-3.46-3.78-3.46z" fill="#FFF"></path><path d="M113.16 28.58c-.61 0-1.46-.31-1.46-1.06 0-.96 1.06-1.33 1.98-1.33.82 0 1.21.18 1.7.42a2.264 2.264 0 01-2.22 1.97z" fill="#000"></path><path fill="#FFF" d="M123.74 22l-2.14 5.42h-.06L119.32 22h-2.01l3.33 7.58-1.9 4.21h1.95L125.82 22zM106.93 30h1.87V17.5h-1.87z"></path><path d="M10.43 7.53c-.29.31-.46.79-.46 1.4v22.12c0 .62.17 1.1.46 1.4l.07.07 12.39-12.39v-.3L10.51 7.46l-.08.07z" fill="url(#a)"></path><path d="M27.03 24.27l-4.13-4.13v-.3l4.13-4.13.09.05 4.89 2.78c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.09.06z" fill="url(#b)"></path><path d="M27.12 24.22L22.9 20 10.43 32.46c.46.49 1.22.55 2.08.06l14.61-8.3" fill="url(#c)"></path><path d="M27.12 15.77l-14.61-8.3c-.86-.49-1.62-.43-2.08.06l12.46 12.46 4.23-4.22z" fill="url(#d)"></path></g></svg></a>
                            <a href="https://utsh.adj.st/?adj_t=128rlk44&amp;adj_deep_link=yemeksepeti%3A%2F%2F%3F&amp;adj_campaign=tr_homepage_huawei&amp;wssid=1698007190211.866620242441334300.e219a7ffw1" target="_blank" class="huawei-store" aria-label="huawei-store" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="133" height="40"><g fill="none"><path fill="#B6B6B6" d="M123.928 0H7.416c-.663.01-1.324.068-1.978.176-.65.11-1.28.319-1.867.619-.59.302-1.13.694-1.6 1.162a6.291 6.291 0 0 0-1.163 1.6 6.536 6.536 0 0 0-.616 1.867C.082 6.077.022 6.738.016 7.4c0 .302 0 .606-.016.91v23.332c0 .307 0 .605.016.912.007.662.066 1.323.176 1.976.109.65.317 1.28.616 1.867a6.35 6.35 0 0 0 2.755 2.806c.587.3 1.217.51 1.867.624.654.106 1.316.164 1.978.173H125.9c.66-.008 1.32-.066 1.973-.173a6.728 6.728 0 0 0 1.885-.624 6.155 6.155 0 0 0 1.6-1.163 6.254 6.254 0 0 0 1.168-1.6 6.54 6.54 0 0 0 .61-1.867c.111-.653.173-1.314.185-1.976V7.437a13.284 13.284 0 0 0-.184-1.975 6.608 6.608 0 0 0-.61-1.867A6.4 6.4 0 0 0 129.765.8a6.63 6.63 0 0 0-1.885-.619 13.174 13.174 0 0 0-1.974-.176h-.91L123.929 0z"></path><path fill="#000" d="M8.329 39.139h-.894a12.609 12.609 0 0 1-1.845-.16 5.867 5.867 0 0 1-1.635-.534 5.515 5.515 0 0 1-2.4-2.381 5.707 5.707 0 0 1-.534-1.638 12 12 0 0 1-.162-1.85c0-.209-.016-.902-.016-.902V8.337s0-.683.016-.883c.009-.622.067-1.241.173-1.854a5.662 5.662 0 0 1 .533-1.642c.258-.51.597-.976 1.003-1.38a5.544 5.544 0 0 1 1.384-1.01 5.811 5.811 0 0 1 1.632-.533C6.196.935 6.815.88 7.435.872h118.456c.615.005 1.228.059 1.835.16a5.782 5.782 0 0 1 1.648.533 5.502 5.502 0 0 1 2.384 2.4c.259.514.439 1.063.533 1.63a12.8 12.8 0 0 1 .171 1.867V32.57a12.12 12.12 0 0 1-.168 1.83 5.6 5.6 0 0 1-.533 1.648 5.552 5.552 0 0 1-2.384 2.376c-.519.26-1.074.44-1.646.533-.61.1-1.227.153-1.845.16H8.329v.022z"></path><path fill="#FFF" d="M49.486 27.004h-4.691l-1.139 3.131h-2.061l4.584-11.696h1.947l4.694 11.696h-2.158z"></path><path fill="#000" d="M45.392 25.404h3.494l-1.25-3.35c-.172-.46-.342-.973-.508-1.533-.152.496-.317 1-.493 1.518l-1.243 3.365z"></path><path fill="#FFF" d="M53.649 23.556c0-.645-.021-1.356-.064-2.133h1.867c.07.365.118.735.144 1.107a3.534 3.534 0 0 1 2.667-1.27 3.006 3.006 0 0 1 2.813 1.83 5.56 5.56 0 0 1 .456 2.4c.02.898-.162 1.79-.533 2.608-.31.679-.818 1.25-1.456 1.637a4.16 4.16 0 0 1-2.163.558 5.307 5.307 0 0 1-1.752-.299v3.608l-1.995.17.016-10.216z"></path><path fill="#000" d="M58.892 28.002c.405-.547.61-1.334.61-2.4 0-.975-.168-1.686-.506-2.134a1.6 1.6 0 0 0-1.333-.656 2.152 2.152 0 0 0-1.067.267 4 4 0 0 0-.936.733v4.667c.22.104.454.181.693.23.258.055.52.084.784.085a2.07 2.07 0 0 0 1.755-.792z"></path><path fill="#FFF" d="M62.746 23.556c0-.645-.022-1.356-.064-2.133h1.866c.073.365.122.735.147 1.107.775-.847 1.664-1.27 2.667-1.27a3.006 3.006 0 0 1 2.813 1.83 5.56 5.56 0 0 1 .456 2.4 5.984 5.984 0 0 1-.52 2.608c-.311.68-.82 1.25-1.458 1.637a4.152 4.152 0 0 1-2.163.558 5.307 5.307 0 0 1-1.752-.299v3.608l-1.995.17.003-10.216z"></path><path fill="#000" d="M67.997 28.002c.405-.548.608-1.348.608-2.4 0-.975-.168-1.686-.504-2.134a1.6 1.6 0 0 0-1.334-.656 2.163 2.163 0 0 0-1.067.267 4 4 0 0 0-.936.733v4.667c.222.104.454.18.694.23.257.055.52.084.784.085.68.04 1.335-.256 1.755-.792z"></path><path fill="#FFF" d="M74.298 29.583a4.851 4.851 0 0 1-1.987-2.045 6.715 6.715 0 0 1-.693-3.15 6.587 6.587 0 0 1 .8-3.347 5.155 5.155 0 0 1 2.176-2.066 6.811 6.811 0 0 1 3.089-.691 8.086 8.086 0 0 1 1.925.224 8.18 8.18 0 0 1 1.707.608l-.507 1.533a7.083 7.083 0 0 0-3.037-.757 4.25 4.25 0 0 0-2.134.533 3.547 3.547 0 0 0-1.427 1.531 5.371 5.371 0 0 0-.506 2.438c-.014.757.118 1.51.389 2.218a3.288 3.288 0 0 0 1.237 1.537c.638.399 1.382.596 2.134.565.39-.001.778-.034 1.163-.099a5.88 5.88 0 0 0 1.09-.282v-2.366h-2.715v-1.55h4.643v4.918c-.673.314-1.379.555-2.104.718a9.822 9.822 0 0 1-2.192.25 6.195 6.195 0 0 1-3.05-.72zm14.433.552a7.657 7.657 0 0 1-.138-1.154c-.334.387-.74.705-1.198.933a3.563 3.563 0 0 1-1.667.384 3.139 3.139 0 0 1-1.37-.296 2.248 2.248 0 0 1-.98-.888 2.715 2.715 0 0 1-.364-1.448 2.48 2.48 0 0 1 .914-2.022c.608-.503 1.623-.754 3.043-.754.53 0 1.058.037 1.582.112v-.171c0-.768-.164-1.31-.491-1.627a1.968 1.968 0 0 0-1.414-.472c-.46.006-.92.068-1.365.187a7.16 7.16 0 0 0-1.285.443l-.315-1.451a7.68 7.68 0 0 1 1.403-.446 8.233 8.233 0 0 1 1.842-.202 4.8 4.8 0 0 1 1.92.344c.537.237.974.654 1.235 1.179.328.702.48 1.473.446 2.248V28.5c0 .355.021.901.064 1.637l-1.862-.003z"></path><path fill="#000" d="M87.537 28.535c.384-.178.73-.431 1.016-.744v-1.6a12.913 12.913 0 0 0-1.334-.088c-.825 0-1.395.133-1.71.4a1.333 1.333 0 0 0-.471 1.067c-.03.353.096.701.344.955.26.219.594.33.933.312.425-.007.843-.11 1.222-.302z"></path><path fill="#FFF" d="M92.07 28.045V17.75l1.984-.16v10.1c-.025.276.042.552.19.787a.736.736 0 0 0 .602.232c.181-.008.36-.039.534-.091l.234 1.43a3.432 3.432 0 0 1-.69.18 4.723 4.723 0 0 1-.771.07c-1.389 0-2.083-.751-2.083-2.253zm4.963 0V17.75l1.987-.16v10.1c-.025.276.041.552.19.787a.736.736 0 0 0 .602.232c.18-.008.36-.039.533-.091l.232 1.43a3.403 3.403 0 0 1-.688.18 4.728 4.728 0 0 1-.773.07c-1.387 0-2.081-.751-2.083-2.253zm11.705-2.011h-5.7c.092 1.826.96 2.739 2.609 2.739a5.6 5.6 0 0 0 1.256-.15c.42-.098.832-.231 1.23-.4l.437 1.366a7.443 7.443 0 0 1-3.286.709 4.8 4.8 0 0 1-2.341-.533 3.358 3.358 0 0 1-1.435-1.51 5.374 5.374 0 0 1-.48-2.373 5.614 5.614 0 0 1 .51-2.486 3.704 3.704 0 0 1 1.416-1.6 3.976 3.976 0 0 1 2.096-.55 3.52 3.52 0 0 1 2.061.58c.55.382.977.916 1.227 1.538.275.677.41 1.403.4 2.134v.536z"></path><path fill="#000" d="M106.794 24.767a2.507 2.507 0 0 0-.534-1.563 1.6 1.6 0 0 0-1.25-.52 1.683 1.683 0 0 0-1.264.534 2.779 2.779 0 0 0-.66 1.557l3.708-.008z"></path><path fill="#FFF" d="M110.247 23.612c0-.477-.024-1.208-.066-2.187h1.866c.032.243.062.534.094.867.032.334.048.61.058.822.201-.34.43-.663.683-.966.22-.258.486-.475.784-.637a2.07 2.07 0 0 1 1.022-.248c.27-.007.54.026.8.098l-.251 1.729a2.293 2.293 0 0 0-1.867.266c-.436.33-.815.73-1.123 1.182v5.6h-1.984l-.016-6.526zm6.35 10.088a4.814 4.814 0 0 1-.717-.172l.362-1.454c.168.045.338.082.51.11.192.034.386.051.581.053.89 0 1.55-.568 1.984-1.704l.131-.323-3.2-8.785h2.133l1.616 4.91c.21.632.378 1.276.507 1.928.152-.63.328-1.259.533-1.888l1.64-4.95h2.009l-3.2 8.825a9.08 9.08 0 0 1-.98 2.019 3.416 3.416 0 0 1-1.237 1.136 3.696 3.696 0 0 1-1.725.373 5.448 5.448 0 0 1-.947-.077zM41.595 7.302h3.547l-.099.859h-2.4v1.661h2.275v.8h-2.275v1.84h2.541l-.088.867h-3.501zm5.998 2.955-1.867-2.955h1.184l1.27 2.17 1.333-2.17h1.149l-1.867 2.917 2.02 3.115h-1.201l-1.437-2.373-1.465 2.373h-1.149zm3.987-2.955h1.626c.763 0 1.348.155 1.755.467a1.6 1.6 0 0 1 .608 1.349c.011.367-.081.73-.267 1.048a1.795 1.795 0 0 1-.76.688c-.35.165-.733.248-1.12.24a4.534 4.534 0 0 1-.8-.083v2.323H51.58V7.302z"></path><path fill="#000" d="M54.193 9.995a1.09 1.09 0 0 0 .333-.85.923.923 0 0 0-.338-.8c-.3-.183-.65-.269-1-.246h-.566v2.134c.198.035.399.056.6.061.35.026.697-.08.97-.299z"></path><path fill="#FFF" d="M56.598 7.302h1.04v5.141h2.497l-.088.891h-3.449zm5.121 5.736a2.501 2.501 0 0 1-1.014-1.067 3.467 3.467 0 0 1-.349-1.6 3.568 3.568 0 0 1 .373-1.67 2.603 2.603 0 0 1 1.067-1.103 3.336 3.336 0 0 1 1.667-.379 3.12 3.12 0 0 1 1.57.376c.435.247.785.619 1.006 1.067.238.493.356 1.034.344 1.581a3.582 3.582 0 0 1-.376 1.688c-.239.466-.61.85-1.067 1.105a3.33 3.33 0 0 1-1.64.389 3.107 3.107 0 0 1-1.581-.387z"></path><path fill="#000" d="M64.418 12.3c.294-.195.522-.474.656-.8.15-.374.223-.774.216-1.177a3.267 3.267 0 0 0-.192-1.16c-.12-.322-.334-.6-.614-.8a2.067 2.067 0 0 0-2.157 0c-.295.205-.525.49-.662.822a2.8 2.8 0 0 0-.22 1.133c-.007.4.063.8.207 1.173.262.703.95 1.154 1.699 1.115.378.01.75-.098 1.067-.307z"></path><path fill="#FFF" d="M67.543 7.302h1.888a2.507 2.507 0 0 1 1.566.413 1.4 1.4 0 0 1 .533 1.179c.006.292-.06.582-.192.843a1.867 1.867 0 0 1-.475.594 2.133 2.133 0 0 1-.586.336l1.866 2.667H70.93l-1.57-2.4h-.766v2.4h-1.05V7.302z"></path><path fill="#000" d="M69.178 10.155c.232.005.461-.045.67-.146.187-.09.345-.232.455-.408.11-.189.167-.404.163-.622a.763.763 0 0 0-.288-.664 1.403 1.403 0 0 0-.837-.21h-.755v2.061l.592-.01z"></path><path fill="#FFF" d="M72.957 7.302h3.555l-.102.859h-2.4v1.661h2.254v.8h-2.275v1.84h2.541l-.088.867h-3.485zm7.422 0h1.04v6.032h-1.04zm3.795.869h-1.867l.09-.87h4.694l-.096.87h-1.779v5.163h-1.042zm7.437 4.867a2.496 2.496 0 0 1-1.01-1.067 3.432 3.432 0 0 1-.352-1.6 3.568 3.568 0 0 1 .373-1.67 2.616 2.616 0 0 1 1.067-1.103 3.35 3.35 0 0 1 1.656-.39 3.107 3.107 0 0 1 1.57.377c.436.246.786.617 1.006 1.066.239.493.358 1.035.347 1.582a3.552 3.552 0 0 1-.379 1.688c-.238.466-.61.85-1.067 1.104a3.315 3.315 0 0 1-1.64.39 3.107 3.107 0 0 1-1.57-.377z"></path><path fill="#000" d="M94.313 12.3c.293-.196.52-.475.653-.8.15-.374.223-.774.216-1.177a3.267 3.267 0 0 0-.192-1.16 1.71 1.71 0 0 0-.61-.8 2.07 2.07 0 0 0-2.16 0c-.295.205-.525.49-.662.822-.15.358-.226.744-.221 1.133-.007.4.064.8.208 1.173.127.33.349.613.637.816.316.209.689.313 1.067.3.377.007.748-.1 1.064-.308z"></path><path fill="#FFF" d="M97.438 7.302h1.195l2.984 4.675a20.507 20.507 0 0 1-.037-1.23V7.302h.966v6.032h-1.158l-3.03-4.75c.03.534.046 1.017.046 1.435v3.315h-.966V7.302z"></path><path fill="#C8102E" d="M26.927 7.334h-11.07c-5.219 0-7.128 1.91-7.128 7.128V25.54c0 5.22 1.909 7.129 7.128 7.129h11.07c5.22 0 7.131-1.91 7.131-7.129V14.462c.006-5.219-1.904-7.128-7.13-7.128z"></path><path fill="#FFF" d="M13.745 20.001h.672v3.313h-.672v-1.347h-1.518v1.347h-.672V20h.672v1.334h1.518zm3.787 1.896c0 .534-.267.827-.752.827-.486 0-.758-.296-.758-.85v-1.867h-.672V21.9c0 .93.518 1.464 1.42 1.464.9 0 1.434-.533 1.434-1.493v-1.867h-.672v1.893zm7.766.382L24.546 20h-.552l-.752 2.278L22.514 20h-.715l1.155 3.313h.557l.752-2.177.752 2.177h.563L26.73 20h-.699zm2.635-.392h1.224v-.603h-1.224v-.677h1.776V20H27.27v3.307h2.502v-.602h-1.84zm2.64 1.421h.664v-3.307h-.664zm-11.041-.685-.301.688h-.686L19.993 20h.592l1.454 3.31h-.704l-.275-.685z"></path><path fill="#C8102E" d="M19.783 22.025h1.01l-.512-1.186z"></path><path fill="#FFF" d="M21.396 15.785a4.219 4.219 0 0 1-4.216-4.216h.595a3.622 3.622 0 0 0 7.243 0h.594a4.219 4.219 0 0 1-4.216 4.216z"></path></g></svg></a>
                        </div>


                    </div>
                    <div>
                        <img className='yemeksepeti__footer-telephone-img' src="https://images.deliveryhero.io/image/foodpanda/home-yemeksepeti-apps.png?width=600&height=600" alt="" />
                    </div>


                </div>

                <p className='yemeksepeti__footer-paragrahp'>Türkiye'nin 81 şehri ve KKTC'de, 50 bini aşkın restoran iş ortağımızla, Türkiye’de online yemek siparişi denince ilk akla gelen markayız! Restoran zincirleri başta olmak üzere, <br /> civarınızdaki en sevdiğiniz restoranlardan kolayca sipariş verebilirsiniz.</p>
                <p className='yemeksepeti__footer-paragrahps'>Bunun yanında, hızlı market alışverişine ihtiyacınız varsa, Yemeksepeti Market hizmetinizde! Binlerce market ürünü dilediğiniz anda, dakikalar içinde gelsin!  </p>
                <p className='yemeksepeti__footer-paragrahps'>Restoranınızı seçin, istediğiniz yemekleri sepete ekleyin, online ya da kapıda dilediğiniz gibi ödeyin. Gerisi kolay, siparişiniz hızlıca kapınızda!</p>
                <p className='yemeksepeti__footer-paragrahps'>Yemeksepeti Mahalle de burada! Çevrenizdeki bildiğiniz, güvendiğiniz işletme ve esnaflar; marketten kasaba, şarküteriden manava, balıkçıdan petshopa, tüm kampanyaları ve <br /> fırsatlarıyla siparişiniz için hazır.</p>
                <h5 className='yemeksepeti__footer-h5'>Yemeksepeti’nde sizi neler bekliyor?</h5>
                <ul className='yemeksepeti__footer-list'>
                    <li><GiCheckMark className='yemeksepeti__footer-check'/> Yemek siparişi ya da market alışverişinde onlarca mutfak ve kategori, binlerce çeşit ürün!</li>
                    <li><GiCheckMark className='yemeksepeti__footer-check'/> Yemek ve market ihtiyaçlarınızda her gün on binlerce indirim!</li>
                    <li><GiCheckMark className='yemeksepeti__footer-check'/> Online ya da kapıda, dilediğiniz gibi ödeme seçeneği!</li>
                    <li><GiCheckMark className='yemeksepeti__footer-check'/>Siparişinizle ilgili size her zaman destek olmaya hazır, 7/24 Canlı Yardım ekibi!</li>
                </ul>
                <p className='yemeksepeti__footer-paragrahps'>Tek yapmanız gereken ihtiyacınızı düşünmek ve çevrenizdeki seçeneklere göz atmak!</p>

                <h3 className='yemeksepeti__footer-h3'>Yemeksepeti yanında, aklındaysa kapında!</h3>
                <hr className='yemeksepeti__footer-hr1' />
                <div className='yemeksepeti__footer-socialmedia'>
                    <h3 className='yemeksepeti__footer-yemeksepeti-logo'>Yemeksepeti</h3>
                    <div className='yemeksepeti__footer-socialmedya-logo'>

                        <div className='yemeksepeti__media-logo'>
                            <a className='socialmedia-logo-link'  href='https://twitter.com/yemeksepeti'  target="_blank"><CiTwitter /></a>
                        </div>
                        <div className='yemeksepeti__media-logo'>
                            <a  className='socialmedia-logo-link' href='https://www.facebook.com/Yemeksepeti' target="_blank"><FiFacebook /></a>
                        </div>
                        <div className='yemeksepeti__media-logo'>
                            <a className='socialmedia-logo-link' href='https://www.instagram.com/yemeksepeti/'  target="_blank"><PiInstagramLogoThin /></a>
                        </div>
                        <div className='yemeksepeti__media-logo'>
                            <a className='socialmedia-logo-link' href='https://www.linkedin.com/company/yemeksepeti/'  target="_blank"><SlSocialLinkedin /></a>
                        </div>
                    </div>

                </div>

                <hr className='yemeksepeti__footer-hr2' />
                <div className='yemeksepeti__general-information'>
                    <div>
                        <ul className='yemeksepeti__general-information-list'>
                            <a><li>© 2023 Yemeksepeti</li></a>

                        </ul>
                    </div>
                    <div>
                        <ul className='yemeksepeti__general-information-list'>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li>Yardım Merkezi</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li> Kullanım Koşulları</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li> S.S.S. ve İşlem Rehberi</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li>Basın</li></a>
                        </ul>
                    </div>

                    <div>
                        <ul className='yemeksepeti__general-information-list'>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li>Çerez Politikası</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li>İletişim</li></a>
                            <a href='#'className='yemeksepeti__general-information-list-link'><li>Bizimle Çalışın</li></a>
                        </ul>
                    </div>
                    <div>
                        <ul className='yemeksepeti__general-information-list'>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li>Aydınlatma Metni</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li> Kişisel Verilerin Korunması ve İşlenmesi ve <br/>  Gizlilik Politikası</li></a>
                            <a href='#' className='yemeksepeti__general-information-list-link'><li> Bilgi Toplumu Hizmetleri</li></a>

                        </ul>
                        <div className='yemeksepeti__footer-QR'>
                         <a href='https://guvendamgasi.org.tr/firmadetay.php?Guid=7c396e72-63f6-11ec-9a96-48df373f4850 '  target="_blank"><img src="https://images.deliveryhero.io/image/foodpanda/tr/partners/guvendamgasi-logo.png" alt="" /></a>  
                          <a href='https://www.eticaret.gov.tr/siteprofil/202107B0B29742B69ADFFD4F2293FE5B/wwwyemeksepeticom'  target="_blank"><img className='yemeksepeti__footer-Qr-etbis' src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <hr className='yemeksepeti__footer-hr3' />

                <div>
                    <h4 className='yemeksepeti__footer-kitchen'>Mutfaklar</h4>
                    <div className='yemeksepeti__footer-city-menu'>
                        <div>
                           <a href='#' className='yemeksepeti__footer-city-name-link'> <h5 className='yemeksepeti__footer-city-name'>İstanbul</h5></a>
                            <ul className='yemeksepeti__footer-menu-name'>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'><li>Burger</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Pizza</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'><li>Kebab & Türk  Mutfağı</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Döner</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'><li>Tost & Sandviç</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'><li>Tavuk</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'><li>Pide &  Lahmacun</li></a>
                               <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Tatlı</li></a>
                            </ul>
                        </div>

                        <div>
                        <a href='#' className='yemeksepeti__footer-city-name-link'><h5 className='yemeksepeti__footer-city-name'>Ankara</h5></a>
                            <ul className='yemeksepeti__footer-menu-name'>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Döner</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Burger</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Kebab & Türk  Mutfağı</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Pizza</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Çiğ Köfte</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Tavuk</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Pide &  Lahmacun</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Tost & Sandviç</li></a>
                            </ul>
                        </div>

                        <div>
                        <a href='#' className='yemeksepeti__footer-city-name-link'><h5 className='yemeksepeti__footer-city-name'>İzmir</h5></a>
                            <ul className='yemeksepeti__footer-menu-name'>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Döner</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Pizza</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Pide & Lahmacun</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Burger</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Kebab & Türk Mutfağı</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Tost & Sandviç</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Çiğ Köfte</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Tavuk</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Döner</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Pizza</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Pide & Lahmacun</li></a>
                            </ul>
                        </div>

                        <div>
                        <a href='#' className='yemeksepeti__footer-city-name-link'><h5 className='yemeksepeti__footer-city-name'>Antalya</h5></a>
                            <ul className='yemeksepeti__footer-menu-name'>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Burger</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Döner</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Kebab & Türk  Mutfağı</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Pizza</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'> <li>Tost & Sandviç</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Tavuk</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>  <li>Çiğ Köfte</li></a>
                            <a href='#' className='yemeksepeti__footer-menu-name-link'>   <li>Pide &  Lahmacun</li></a>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='yemeksepeti__footer-hr3'  />

                <div className='yemeksepeti__footer-othercities'>
                    <h5 className='yemeksepeti__footer-othercities-h5'>Diğer Şehirler</h5>
                    <hr className='yemeksepeti__footer-hr4' />
                </div>

            </div>
            <div className='yemeksepeti__footer-finish'>
             <a href='https://yemek.com/'  target="_blank"><img className='yemeksepeti__footer-yemekcom-logo' src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_logo_new.png" alt="" /></a>
             <a href='https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom'  target="_blank"><img className='yemeksepeti__footer-yemekcom-logo' src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_google.png" alt="" /></a>   
             <a href='https://apps.apple.com/tr/app/yemek-com-yemek-tarifleri/id1351326948?l=tr?l=tr' target="_blank"><img className='yemeksepeti__footer-yemekcom-logo' src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_apple.png" alt="" /></a>   
            </div>
           
        </div>
    )
}

export default Home;