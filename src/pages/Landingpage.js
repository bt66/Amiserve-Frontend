import React, { useState } from 'react'
import Header from '../components/Header'
import VectorImage from '../assets/landingpage_main.svg';
import ShieldLock from '../assets/shield_lock.svg';
import DNS from '../assets/dns.svg';
import MailIcon from '../assets/mail.svg';
import WhatsappIcon from '../assets/whatsapp.svg';
import { Link } from "react-router-dom";
// static content
const daily = [
  {
    price: '50',
    packet_name: 'SMALL',
    benefit: 'Bassic deployment with max update source code 2x',
  },
  {
    price: '60',
    packet_name: 'Medium',
    benefit: 'Bassic deployment with max update source code 4x',
  },
]
const monthly = [
  {
    price: '70',
    packet_name: 'SMALL',
    benefit: 'Bassic deployment with max update source code 2x',
  },
  {
    price: '80',
    packet_name: 'Medium',
    benefit: 'Bassic deployment with max update source code 4x',
  },
]

const Key_feature = [
  {
    img: ShieldLock,
    alternative: 'shield_icon',
    title: 'We provide free ssl certificate',
    description: 'Let your service more secure with ssl.'
  },
  {
    img: DNS,
    alternative: 'dns_icon',
    title: 'Free subdomain',
    description: 'If you doesn’t have domain name, we provide free subdomain for free.'
  },
]



function Landingpage() {
  const [pricingBtn, setPricingBtn] = useState(false);

  return (
    // <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-full absolute'>
    //   <p>hello</p>
    // </div>
    <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-max absolute text-white'>
      {/* tagline */}
      <div className='relative'>
        <Header></Header>
        <div className='p-4 flex flex-col md:flex-row'>
          <div className='md:flex md:flex-col md:items-center md:justify-center'>
            <div className='md:max-w-4xl'>
              <p className='text-center text-xl sm:text-3xl'>Solusi <b>SERVER HEMAT</b> Biaya untuk <b>FINAL PROJECT</b> Anda!</p>
              <div className='hidden md:block'>
                <p className='text-center mt-4 sm:text-2xl'>Kami menawarkan solusi hosting dan server terkelola yang mudah dan murah bagi Final Project Anda.</p>
                <div className='flex justify-center mt-10 md:mt-20'>
                  <div className='cursor-pointer p-1 bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 md:w-60 rounded-full hover:scale-105 duration-200'>
                    <div className='bg-gradient-to-r from-[#7A1EA6] from-2% via-[#3F3DA4] via-50% to-[#3F3DA4] to-90% rounded-full p-4'>
                      <p className='text-xl text-center md:text-2xl'>Coba Sekarang!</p>
                    </div>
                  </div>
                </div>
                {/* <div className=' mt-9 flex justify-center'>
                  <div className='bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 md:w-60 flex justify-center rounded-full p-4 cursor-pointer border-2 md:mt-10 hover:scale-105'>
                    <p className='text-sm md:text-xl'><b>Coba sekarang!</b></p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className='flex justify-center md:order-last'>
            <img src={VectorImage} alt='main-content' className='mt-10 sm:w-7/12 md:w-[900px]'></img>
          </div>
          <div className='md:hidden'>
            <p className='text-center mt-4 sm:text-2xl'>Kami menawarkan solusi hosting dan server terkelola yang mudah dan murah bagi Final Project Anda.</p>
            <div className='flex justify-center mt-10 md:mt-20'>
              <div className='cursor-pointer p-1 bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 md:w-60 rounded-full hover:scale-105 duration-200'>
                <div className='bg-gradient-to-r from-[#7A1EA6] from-2% via-[#3F3DA4] via-50% to-[#3F3DA4] to-90% rounded-full p-4'>
                  <p className='text-md text-center md:text-2xl'>Coba Sekarang!</p>
                </div>
              </div>
            </div>
            {/* <div className=' mt-9 flex justify-center'>
              <div className='bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 flex justify-center rounded-full p-4 cursor-pointer border-2'>
                <p className='text-sm'>Coba sekarang!</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* content 2 */}
        <div className='p-4 mt-10 md:flex md:flex-col md:justify-center md:items-center'>
          <div className='md:max-w-4xl'>
            <p className='text-xl text-center md:text-3xl md:m-10'><b>Just focus on your code and let Amiserve deploy your Project</b></p>

            <p className='text-center mt-4 md:text-xl md:mt-6'>Anda hanya perlu memberitahu kami tentang kebutuhan untuk final project anda sehingga kami mengetahui apa yang anda butuhkan, selanjutnya anda dapat berfokus kepada pengembangan aplikasi tanpa perlu memikirkan server dan pemeliharaan.</p>
          </div>
        </div>

        {/* content 3 */}
        <p className='text-2xl text-center mt-10 md:text-3xl md:m-10'><b>Why choose Amiserve?</b></p>
        <p className='text-xl text-center mt-5 md:text-2xl'><b>Key Features</b></p>

        {/* card  container*/}
        <div className='p-2 flex flex-nowrap overflow-x-auto  md:justify-center'>
          {
            Key_feature.map((item) => (
              <div className='flex-none p-2 hover:scale-105'>
                <div className='bg-[#60477D] rounded-lg border-4 border-[#7A1EA6] flex flex-col justify-center w-52 max-h-80 h-72 p-3'>
                  <div className='flex justify-center mt-1 mb-4'>
                    <img src={item.img} alt={item.alternative} className='w-28'></img>
                  </div>
                  <p className='text-center'><b>{item.title}</b></p>
                  <p className='text-center'>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* taruh sini */}
        {/* pricing container */}
        <div>
          <p className='text-center text-2xl mt-10 md:text-3xl md:mt-20  md:mb-10'><b>Pricing</b></p>
          {/* button */}
          <div className='flex justify-center mt-4'>
            <div className='flex md:m-5'>
              <div className={`bg-[#4C2383] w-36 p-2 md:p-5 md:w-52 transition-all duration-500 ${pricingBtn ? "bg-[#4C2383]" : "bg-[#8000FF]"}`}  onClick={() => setPricingBtn(false)}>
                <p className='text-center md:text-2xl'>Daily</p>
              </div>
              <div className={`bg-[#4C2383] w-36 p-2 md:p-5 md:w-52 transition-all duration-500 ${pricingBtn ? "bg-[#8000FF]" : "bg-[#4C2383]"}`} onClick={() => setPricingBtn(true)}>
                <p className='text-center md:text-2xl'>Monthly</p>
              </div>
            </div>
          </div>
          {/* pricing card  container*/}
          <div className='p-2 flex flex-nowrap overflow-x-auto md:justify-center'>
            {/* card pricing */}
            {(pricingBtn ? monthly:daily).map((item) => (
            <div className='flex-none p-2 hover:scale-105'>
              <div className='bg-[#60477D] rounded-lg border-4 border-[#7A1EA6] flex flex-col justify-center w-52 max-h-80 h-72 p-3'>
                <p className='text-4xl'>
                  <b>Rp. {item.price}.<span className='text-2xl'>000</span></b>
                </p>
                <p className='text-2xl mt-4'><b>{item.packet_name}</b></p>
                <p className='text-lg mt-3'>{item.benefit}</p>
              </div>
              </div>
              ))
            }
          </div>
        </div>
        {/* contact container */}
        <div className='mt-10 p-3 md:mt-20 md:flex md:items-center md:justify-center'>
          <div className='md:max-w-3xl'>
            <p className='text-center text-2xl md:text-3xl'><b>Need Custom more resource for business need?</b></p>
            <p className='text-center mt-4 md:text-xl md:mt-10'>If you need some custom service which not listed on pricing for bussines need in example like kubernetes, scallable, loadbalancer, ci/cd, and etc. please contact me.</p>
            <div className='flex justify-center items-center'>
              <div className='flex justify-around rounded-xl bg-[#513976] w-48 h-20 mt-10'>
                <img src={WhatsappIcon} alt='whatsapp_icon' className='cursor-pointer w-14'></img>
                <img src={MailIcon} alt='mail_icon' className='cursor-pointer w-16'></img>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='bg-[#170039] w-full h-20 flex items-center mt-10'>
            <div>
              <p className='p-5'>All right reserved ©2023 no_sh</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage