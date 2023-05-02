import React, { useContext } from 'react';
import AppContext from './context';

const NavbarM = () => {
  const { homeIsTrue, setHomeIsTrue } = useContext(AppContext);
  const { resumeIsTrue, setResumeIsTrue } = useContext(AppContext);
  const { aboutIsTrue, setAboutIsTrue } = useContext(AppContext);
  const { contactIsTrue, setContactIsTrue } = useContext(AppContext);

  
  const handleHome = () => {
    setHomeIsTrue(true);
    setAboutIsTrue(false);
    setResumeIsTrue(false);
    setContactIsTrue(false);
  };
  const handleAbout = () => {
    setHomeIsTrue(false);
    setAboutIsTrue(true);
    setResumeIsTrue(false);
    setContactIsTrue(false);
  };
  const handleResume = () => {
    setHomeIsTrue(false);
    setAboutIsTrue(false);
    setResumeIsTrue(true);
    setContactIsTrue(false);
  };
  const handleContact = () => {
    setHomeIsTrue(false);
    setAboutIsTrue(false);
    setResumeIsTrue(false);
    setContactIsTrue(true);
  };
  return (
        
    
    <div className="w-screen text-lg sm:text-xl md:text-2xl min-h-1024:text-4xl text-green-400 flex px-4 pb-10 md:pb-12 justify-center items-center">

  <div className="flex-grow text-center">
    {homeIsTrue === true ? (
      <span className='bg-green-400 text-black' onClick={handleHome}>Home</span>
    ) : (<span onClick={handleHome}>Home</span>)
    }
  </div>

  <div className="flex-grow text-center ">
    {aboutIsTrue === true ? (
      <span className='bg-green-400 text-black' onClick={handleAbout}>About</span>
    ) : (<span onClick={handleAbout}>About</span>)
    }
  </div>

  <div className="flex-grow text-center">
    {resumeIsTrue === true ? (
      <span className='bg-green-400 text-black' onClick={handleResume}>Resume</span>
    ) : (<span onClick={handleResume}>Resume</span>)
    }
  </div>

  <div className="flex-grow text-center">
    {contactIsTrue === true ? (
      <span className='bg-green-400 text-black' onClick={handleContact}>Contact</span>
    ) : (<span onClick={handleContact}>Contact</span>)
    }
  </div>

</div>

  )
}
export default NavbarM;