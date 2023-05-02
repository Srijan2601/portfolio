import React, {useContext} from 'react'
import NavbarM from './NavbarM'
import Image from 'next/image';
import { Space_Mono } from 'next/font/google'
import AppContext from './context';
import Home from './Home';
import Resume from './Resume';
import scanlines from '../../public/Images/scanlines.png';
import About from './About';
import Contact from './Contact';

const monospace = Space_Mono({ subsets: ['latin'], weight:['400','700'] })


const HomepagecliM = () => {
  const { homeIsTrue, resumeIsTrue, aboutIsTrue, contactIsTrue } = useContext(AppContext);
  return (
    <main className={monospace.className}>
      <Image
          src={scanlines}
          className="absolute w-full h-full object-cover pointer-events-none opacity-20 z-50"
        />
  <div className='min-h-screen w-full text-white bg-[#0C050F] flex flex-col'>
    <div>
      {homeIsTrue === true && <Home/>} 
      {resumeIsTrue === true && <Resume />}
      {aboutIsTrue === true && <About/>}
      {contactIsTrue === true && <Contact/>}
    </div>
    <div className='fixed bottom-0 w-full'><NavbarM/></div>
  </div>
</main>

  )
}

export default HomepagecliM;
