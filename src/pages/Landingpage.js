import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import VectorImage from '../assets/landingpage_main.svg';
import ShieldLock from '../assets/shield_lock.svg';
import DNS from '../assets/dns.svg';
import MailIcon from '../assets/mail.svg';
import WhatsappIcon from '../assets/whatsapp.svg';
import { Link } from "react-router-dom";
import VueIcon from "../assets/vue.svg";
import ReactIcon from "../assets/reactt.svg"
import AngularIcon from "../assets/angular.svg"
import ExpressIcon from "../assets/express.svg"
import GolangIcon from "../assets/golang.svg"
import PythonIcon from "../assets/python.svg"
import NodejsIcon from "../assets/nodejs.svg"
import MysqlIcon from "../assets/mysql.svg"
import MongoIcon from "../assets/mongo.svg"
import FrontendLogo from "../assets/coding.svg"
import BackendLogo from "../assets/backend.svg"
import DatabaseLogo from "../assets/database.svg"
import Footer from '../components/Footer';
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

const serviceIcon = [
  {
    img: VueIcon,
    alternative: 'vue',
  },
  {
    img: ReactIcon,
    alternative: 'react',
  },
  {
    img: AngularIcon,
    alternative: 'angular',
  },
  {
    img: ExpressIcon,
    alternative: 'express',
  },
  {
    img: GolangIcon,
    alternative: 'golang',
  },
  {
    img: PythonIcon,
    alternative: 'python',
  },
  {
    img: NodejsIcon,
    alternative: 'node',
  },
  {
    img: MysqlIcon,
    alternative: 'mysql',
  },
  {
    img: MongoIcon,
    alternative: 'mongo',
  }
]



function Landingpage() {
  const serviceReference = useRef();
  const [pricingBtn, setPricingBtn] = useState(false);


  return (
    // <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-full absolute'>
    //   <p>hello</p>
    // </div>
    <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-max absolute text-white'>
      {/* tagline */}
      <div className='relative'>
        <Header serviceRef={serviceReference}></Header>
        <div className='p-4 flex flex-col md:flex-row'>
          <div className='md:flex md:flex-col md:items-center md:justify-center'>
            <div className='md:max-w-4xl'>
              <p className='text-center text-xl sm:text-3xl lg:text-5xl'>Solusi <b>SERVER HEMAT</b> Biaya untuk <b>FINAL PROJECT</b> Anda!</p>
              <div className='hidden md:block'>
                <p className='text-center mt-4 sm:text-2xl'>Kami menawarkan solusi hosting dan server terkelola yang mudah dan murah bagi Final Project Anda.</p>
                <div className='flex justify-center mt-10 md:mt-20'>
                  <div className='cursor-pointer p-1 bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 md:w-60 rounded-full hover:scale-105 duration-200'>
                    <div className='bg-gradient-to-r from-[#7A1EA6] from-2% via-[#3F3DA4] via-50% to-[#3F3DA4] to-90% rounded-full p-4'>
                      <p className='text-xl text-center md:text-2xl'>Coba Sekarang!</p>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
        {/* content 2 */}
        <div className='p-4 mt-10 md:flex md:flex-col md:justify-center md:items-center'>
          <div className='md:max-w-4xl'>
            <p className='text-xl text-center md:text-3xl lg:text-5xl md:m-10 lg:mt-52'><b>Just focus on your code and let Amiserve deploy your Project</b></p>

            <p className='text-center mt-4 md:text-xl lg:text-2xl md:mt-6 lg:mt-32'>Anda hanya perlu memberitahu kami tentang kebutuhan untuk final project anda sehingga kami mengetahui apa yang anda butuhkan, selanjutnya anda dapat berfokus kepada pengembangan aplikasi tanpa perlu memikirkan server dan pemeliharaan.</p>
          </div>
        </div>
        <div className='hidden w-full md:h-16 lg:h-32 mt-20 mb-32 md:flex items-center justify-center lg:mt-28'>
          <div className='w-5/6 h-full bg-[#6A41A3] rounded-2xl flex p-3 justify-between'>
            
            {
              serviceIcon.map((item) => (
                <img src={item.img} alt={item.alternative} key={item.alternative} className='md:w-10 lg:w-20 hover:scale-105'></img>
              ))
            }
            <div className='flex justify-center items-center'>
              <p className='text-center md:text-md lg:text-2xl'><b>More...</b></p>
            </div>
          </div>
        </div>
        {/* our service */}
        <div>
          <p className='text-center text-2xl mt-20 lg:mt-56 lg:text-6xl' ref={serviceReference}><b>Our service</b></p>
          {/* list service container */}
          <div className='flex justify-center'>

            <div className='mt-2 md:flex md:items-center md:justify-around lg:mt-28'>
              <div className='flex items-center flex-col mt-10'>
                <div className='bg-[#7A1EA6] w-32 h-32 p-1 rounded-full'>
                  <div className='bg-[#534267] w-full h-full rounded-full flex items-center justify-center'>
                    <img src={FrontendLogo} className='object-cover w-8/12'></img>
                  </div>
                </div>
                <p className='text-xl mx-3 my-2'><b>Frontend Deployment</b></p>
              </div>
              <div className='flex items-center flex-col mt-10'>
                <div className='bg-[#7A1EA6] w-32 h-32 p-1 rounded-full'>
                  <div className='bg-[#534267] w-full h-full rounded-full flex items-center justify-center'>
                    <img src={BackendLogo} className='object-cover w-8/12'></img>
                  </div>
                </div>
                <p className='text-xl mx-3 my-2'><b>Backend Deployment</b></p>
              </div>
              
              <div className='flex items-center flex-col mt-10'>
                <div className='bg-[#7A1EA6] w-32 h-32 p-1 rounded-full'>
                  <div className='bg-[#534267] w-full h-full rounded-full flex items-center justify-center'>
                    <img src={DatabaseLogo} className='object-cover w-8/12'></img>
                  </div>
                </div>
                <p className='text-xl mx-3 my-2'><b>Database Service</b></p>
              </div>
            </div>
          </div>
        </div>
        {/* content 3 */}
        <p className='text-2xl text-center mt-10 md:text-3xl lg:text-5xl lg:mt-52 md:m-10'><b>Why choose Amiserve?</b></p>
        <p className='text-xl text-center mt-5 md:text-2xl lg:text-3xl lg:my-14'><b>Key Features</b></p>

        {/* card  container*/}
        <div className='p-2 flex flex-nowrap overflow-x-auto  md:justify-center'>
          {
            Key_feature.map((item) => (
              <div key={item.alternative} className='flex-none p-2 hover:scale-105'>
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
          <p className='text-center text-2xl mt-10 md:text-3xl md:mt-20  md:mb-10 lg:text-5xl lg:mt-52'><b>Pricing</b></p>
          {/* button */}
          <div className='flex justify-center mt-4 lg:mt-24'>
            <div className='flex md:m-5'>
              <div className={`bg-[#4C2383] w-32 p-2 md:p-5 md:w-52 transition-all duration-500 ${pricingBtn ? "bg-[#4C2383]" : "bg-[#8000FF]"}`}  onClick={() => setPricingBtn(false)}>
                <p className='text-center md:text-2xl'>Daily</p>
              </div>
              <div className={`bg-[#4C2383] w-32 p-2 md:p-5 md:w-52 transition-all duration-500 ${pricingBtn ? "bg-[#8000FF]" : "bg-[#4C2383]"}`} onClick={() => setPricingBtn(true)}>
                <p className='text-center md:text-2xl'>Monthly</p>
              </div>
            </div>
          </div>
          {/* pricing card  container*/}
          <div className='p-2 flex flex-nowrap overflow-x-auto md:justify-center lg:mt-20'>
            {/* card pricing */}
            {(pricingBtn ? monthly:daily).map((item, index) => (
            <div key={index} className='flex-none p-2 hover:scale-105'>
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
          <div className='md:max-w-3xl lg:max-w-5xl lg:mt-52 '>
            <p className='text-center text-2xl md:text-3xl lg:text-5xl'><b>Need Custom more resource for business need?</b></p>
            <p className='text-center mt-4 md:text-xl md:mt-10 lg:text-3xl lg:mt-20'>If you need some custom service which not listed on pricing for bussines need in example like kubernetes, scallable, loadbalancer, ci/cd, and etc. please contact me.</p>
            <div className='flex justify-center items-center'>
              <div className='flex justify-around rounded-xl bg-[#513976] w-48 h-20 mt-10 lg:mt-32 lg:mb-28'>
                <img src={WhatsappIcon} alt='whatsapp_icon' className='cursor-pointer w-14'></img>
                <img src={MailIcon} alt='mail_icon' className='cursor-pointer w-16'></img>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Landingpage