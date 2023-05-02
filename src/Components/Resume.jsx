import React, { useState, useEffect } from 'react'

const Resume = () => {
  const [resumeText, setResumeText] = useState({
    text1: 'cd Resume',
  })

  const [displayText, setDisplayText] = useState({})
  const [showBottomDivs, setShowBottomDivs] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const { text1 } = resumeText
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
  }, [displayText, resumeText])

  const handleOpenPdf = () => {
    window.open('Resume.pdf', '_blank');
  };

  return (
    <div className='p-6 lg:p-2'>
      <div className='p-2 text-base text-green-400 lg:text-xl lg:text-[#FBE5F6]'>
        Portfoloi.exe:~$ {displayText.text1Display}
      </div>

      {showBottomDivs && (
        <div>
          <div className='flex mt-2 border border-dashed lg:border-[#FBE5F6] w-[30wv] h-[60vh] lg:w-[40vw] lg:h-[36vh] min-h-640:h-[38vh] m-auto overflow-auto'>
            <div className='p-2 grid grid-cols-2 gap-x-20 gap-y-3'>
              <div className='border-b border-dashed border-[#FBE5F6]'>
                Technical Skills
              </div>
              <div className='border-b border-dashed border-[#FBE5F6]'>
                Size
              </div>
              <div>C++</div>
              <div>80KB</div>
              <div>Java</div>
              <div>70KB</div>
              <div>HTML,CSS,JS</div>
              <div>90KB</div>
              <div>UI/UX</div>
              <div>100KB</div>
              <div>Video Editing</div>
              <div>90KB</div>
              <div>React</div>
              <div>50KB</div>
              <div>Node</div>
              <div>40KB</div>
              <div>Tailwind</div>
              <div>90KB</div>
              <div>Next</div>
              <div>50KB</div>
            </div>
          </div>
          <div className=' m-1 p-1 min-h-640:m-2 min-h-640:p-2 text-sm lg:text-base text-center border border-white lg:border-[#FBE5F6] hover:bg-white lg:hover:bg-[#FBE5F6] hover:text-[#0C050F]' onClick={handleOpenPdf}>
            Click here to open attachment
          </div>
          
        
        </div>
      )}
    </div>
  )
}

export default Resume
