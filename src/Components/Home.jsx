import { useState, useEffect } from "react"
import React from 'react'

const Home = () => {
  const [homeText, setHomeText] = useState({
    text1: 'cd Home',
    text2: ' HI THERE, MY NAME IS ',
    text3: 'SRIJAN',
    text4: 'A FullStack Developer with a love for User Experience and Interface.'
  });
  
  const [displayText, setDisplayText] = useState({});

  useEffect(()=>{
    const timeout = setTimeout(() => {
      const { text1, text2, text3, text4 } = homeText;
      const { text1Display = '', text2Display = '', text3Display = '', text4Display = '' } = displayText;

      if (text1Display.length < text1.length) {
        setDisplayText({
          ...displayText,
          text1Display: text1.slice(0, text1Display.length + 1)
        });
      } else if (text2Display.length < text2.length) {
        setDisplayText({
          ...displayText,
          text2Display: text2.slice(0, text2Display.length + 1)
        });
      } else if (text3Display.length < text3.length) {
        setDisplayText({
          ...displayText,
          text3Display: text3.slice(0, text3Display.length + 1)
        });
      } else if (text4Display.length < text4.length) {
        setDisplayText({
          ...displayText,
          text4Display: text4.slice(0, text4Display.length + 1)
        });
      }
    }, 25);
    return () => clearTimeout(timeout);
  },[displayText, homeText]);

  return (
    <div className='p-6 lg:p-2'>
      
        <div className='text-base text-green-400 lg:text-xl lg:text-[#FBE5F6]'>Portfoloi.exe:~$ {displayText.text1Display}</div>
        <div className='text-lg lg:text-2xl pt-6'>{displayText.text2Display}</div>
        <div className='text-3xl lg:text-5xl pt-6'>{displayText.text3Display}</div>
        <div className='text-lg lg:text-2xl pt-6'>{displayText.text4Display}</div>
    </div>
  );
}

export default Home;
