import React,{useState, useEffect} from 'react'

const About = () => {
    const [aboutText, setAboutText] = useState({
        text1: 'cd About',
        text2: ' I am Srijan,  a Front-End Developer. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.',
        text3: 'I am currently pursuing Bachelor of Engineering - Computer Science from Chitkara University.',
        text4: 'I spend my free time learning about the latest technology, coding, gaming, drawing and making ui designs.'
      });
      
      const [displayText, setDisplayText] = useState({});
    
      useEffect(()=>{
        const timeout = setTimeout(() => {
          const { text1, text2, text3, text4 } = aboutText;
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
        }, 20);
        return () => clearTimeout(timeout);
      },[displayText, aboutText]);
  return (
    
    <div className='p-6 lg:p-2'>
        <div className='text-base text-green-400 lg:text-xl lg:text-[#FBE5F6]'>Portfoloi.exe:~$ {displayText.text1Display}</div>
        <div className='text-lg lg:text-2xl pt-6'>{displayText.text2Display}</div>
        <div className='text-lg lg:text-2xl pt-6'>{displayText.text3Display}</div>
        <div className='text-lg lg:text-2xl pt-6'>{displayText.text4Display}</div>
    </div>
  )
}

export default About