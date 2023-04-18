import React from 'react'
import Header from '../components/Header'
import VectorImage from '../assets/landingpage_main.svg';
import ShieldLock from '../assets/shield_lock.svg';
import DNS from '../assets/dns.svg';
function Landingpage() {
  return (
    // <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-full absolute'>
    //   <p>hello</p>
    // </div>
    <div className='bg-gradient-to-r from-[#5715B1] from-10% to-[#1F004F] to-90% w-full h-max absolute text-white'>
      {/* tagline */}
      <div className='relative'>
        <Header></Header>
        <div className='p-4'>
          <p className='text-center text-xl'>Solusi <b>SERVER HEMAT</b> Biaya untuk <b>FINAL PROJECT</b> Anda!</p>
          <img src={VectorImage} className='mt-10 '></img>
          <p className='text-center mt-4'>Kami menawarkan solusi hosting dan server terkelola yang mudah dan murah bagi Final Project Anda.</p>
          <div className=' mt-9 flex justify-center'>
            <div className='bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-40 flex justify-center rounded-full p-4 cursor-pointer border-2'>
              <p className='text-sm'>Coba sekarang!</p>
            </div>
          </div>
        </div>
        {/* content 2 */}
        <div className='p-4 mt-10'>
          <p className='text-xl text-center'><b>Just focus on your code and let Amiserve deploy your Project</b></p>

          <p className='text-center mt-4'>Anda hanya perlu memberitahu kami tentang kebutuhan untuk final project anda sehingga kami mengetahui apa yang anda butuhkan, selanjutnya anda dapat berfokus kepada pengembangan aplikasi tanpa perlu memikirkan server dan pemeliharaan.</p>
        </div>

        {/* content 3 */}
        <p className='text-2xl text-center mt-10'><b>Why choose Amiserve?</b></p>
        <p className='text-xl text-center mt-5'><b>Key Features</b></p>

        {/* card  container*/}
        <div className='p-5 flex flex-nowrap overflow-x-auto'>
        <div className='
          flex-none p-2'>
            <div className='bg-[#60477D] rounded-lg border-4 border-[#7A1EA6] flex flex-col justify-center w-52 max-h-80 h-72 p-3'>
              <div className='flex justify-center mt-1 mb-4'>
                <img src={ShieldLock} className='w-28'></img>
              </div>
              <p className='text-center'><b>We provide free ssl certificate</b></p>
              <p className='text-center'>Let your service more secure with ssl.</p>
            </div>
          </div>
          {/* card 2 */}
          <div className='
          flex-none p-2'>
            <div className='bg-[#60477D] rounded-lg border-4 border-[#7A1EA6] flex flex-col justify-center w-52 h-72 p-3'>
              <div className='flex justify-center mt-1 mb-4'>
                <img src={DNS} className='w-24'></img>
              </div>
              <p className='text-center'><b>Free subdomain</b></p>
              <p className='text-center'>If you doesn’t have domain name, we provide free subdomain for free.</p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className='flex w-screen'>
        <div className='flex justify-center content-center'>
          <div className='flex flex-col justify-center content-center p-4 text-white'>
            <div className='flex flex-col'>
              <div>
                <p className='text-2xl m-2 text-center font-poppins '>Solusi <span className='text-4xl'><b>SERVER HEMAT</b></span> Biaya</p>
              </div>
              <div>
                <p className='text-2xl m-2 text-center'>untuk <span className='text-4xl'><b>FINAL PROJECT </b></span>Anda!</p>
              </div>
              <div>
                <p className='text-xl m-2 text-center'>Kami menawarkan solusi hosting dan server terkelola yang mudah dan murah bagi Final Project Anda.</p>
              </div>
            </div>
            <div className='flex justify-center m-20'>
              <div className='bg-gradient-to-r from-[#EE65EE] from-2% via-[#8000FF] via-50% to-[#8000FF] to-90% w-60 flex justify-center rounded-full p-4 cursor-pointer'>
                <p className='text-2xl'>Coba sekarang!</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <img src={VectorImage} className=''></img>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Landingpage