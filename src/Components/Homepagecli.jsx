import React, {useContext} from 'react'
import Navbar from './Navbar'
import scanlines from '../../public/Images/scanlines.png';
import Image from 'next/image';
import AppContext from './context';
import Home from './Home';
import Resume from './Resume'
import About from './About';
import Contact from './Contact';


const Homepagecli = () => {
  const { homeIsTrue, resumeIsTrue, aboutIsTrue, contactIsTrue } = useContext(AppContext);
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center z-1 text-[#FBE5F6]">
      <div className="relative object-cover top-0 left-0 bg-[#0C050F] w-[45vw] xl:w-[38rem] h-[25rem] min-h-640:h-[65vh] min-h-640:w-[41rem] border-2 border-[#FBE5F6] ">
        <Image
          src={scanlines}
          className="absolute w-full h-full object-cover pointer-events-none opacity-20"
        />
        {/* moving rectangle */}
        <div className="absolute top-0 left-0 w-full h-12 bg-[#FBE5F6] animate-moving-rectangle opacity-10 overflow-hidden pointer-events-none"></div>
        
        <Navbar/>
        {homeIsTrue === true &&  <Home/>} 
        {resumeIsTrue === true && <Resume />}
        {aboutIsTrue === true && <About/>}
        {contactIsTrue === true && <Contact/>}
      </div>
    </div>
  )
}

export default Homepagecli