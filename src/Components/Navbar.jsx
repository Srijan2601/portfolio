import React, { useState, useContext } from 'react';
import AppContext from './context';

const Navbar = () => {
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
    <div className="flex flex-col">    
    
      <div className="text-xl p-2">
        Portfoloi.exe:~$ ls
      </div>
      <div className="text-xl pl-2 flex gap-10">

        <div className="flex p-1 hover:text-[#0C050F] hover:bg-[#FBE5F6] transition duration-150">
          {homeIsTrue === true && <div>&gt;</div>}
          
          <div onClick={handleHome}>Home</div>
        </div>

        <div className="flex p-1 hover:text-[#0C050F] hover:bg-[#FBE5F6] transition duration-150">
          {aboutIsTrue === true && <div>&gt;</div>}
          <div onClick={handleAbout}>About</div>
        </div>

        <div className="flex p-1 hover:text-[#0C050F] hover:bg-[#FBE5F6] transition duration-150">
          {resumeIsTrue === true && <div>&gt;</div>}
          <div onClick={handleResume}>Resume</div>
        </div>

        <div className="flex p-1 hover:text-[#0C050F] hover:bg-[#FBE5F6] transition duration-150">
          {contactIsTrue === true && <div>&gt;</div>}
          <div onClick={handleContact}>Contact</div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
