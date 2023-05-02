import React,{useState, useEffect} from 'react'

const Contact = () => {
    const [contactText, setContactText] = useState({
        text1: 'cd Contact',
      })
    
      const [displayText, setDisplayText] = useState({})
      const [showBottomDivs, setShowBottomDivs] = useState(false)
    
      useEffect(() => {
        const timeout = setTimeout(() => {
          const { text1 } = contactText
          const { text1Display = '' } = displayText
    
          if (text1Display.length < text1.length) {
            setDisplayText({
              ...displayText,
              text1Display: text1.slice(0, text1Display.length + 1),
            })
          } else {
            setShowBottomDivs(true)
          }
        }, 100)
        return () => clearTimeout(timeout)
      }, [displayText, contactText])

      const handleOpenLinkedIn = () => {
        window.open('https://www.linkedin.com/in/srijan-girdhar-516ba1235/', '_blank');
      };
      const handleOpenGithub = () => {
        window.open('https://github.com/Srijan2601', '_blank');
      };
      const handleOpenEmail = () => {
        window.open('mailto:srijangirdhar26@gmail.com', '_blank');
      };
  return (
    <div>
      <div className='p-5 text-base text-green-400 lg:text-xl lg:text-[#FBE5F6]'>
        Portfoloi.exe:~$ {displayText.text1Display}
      </div>

      {showBottomDivs && (
        <div className='flex justify-center items-center mt-2 border border-dashed lg:border-[#FBE5F6] w-screen h-[60vh] lg:w-[40vw] lg:h-[36vh] min-h-640:h-[38vh] m-auto overflow-hidden'>
        <div className='p-5 lg:p-0 text-white lg:text-[#FBE5F6]'>
           <div className='grid grid-cols-1 sm:grid-cols-3 p-5 justify-center items-center gap-10 md:gap-20'>
                <div className='flexbox justify-center items-center' onClick={handleOpenLinkedIn}>
                    <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path className=' fill-white lg:fill-[#FBE5F6]' d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
                    Linked in
                </div>
                <div onClick={handleOpenGithub}>
                    <svg  width="50px" height="50px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" className=' fill-white lg:fill-[#FBE5F6]'/>
                        <path d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z" fill="black"/>
                    </svg>
                    <div className='w-[50px] text-center'>Github</div>
                </div>
                <div onClick={handleOpenEmail}>
                    <svg className=' fill-white lg:fill-[#FBE5F6]' width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/></svg>
                    <div className='w-[50px] text-center'>Email</div>
                </div>
                
                
            </div>
            
            
        </div>
        </div>
      )}
    </div>
  )
}

export default Contact