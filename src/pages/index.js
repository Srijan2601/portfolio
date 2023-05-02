import { Fragment } from 'react'
import BackImage from '@/Components/BackImage'
import Homepagecli from '@/Components/Homepagecli'
import { useState } from 'react';
import AppContext from '@/Components/context';
import HomepagecliM from '@/Components/HomepagecliM';



export default function Home() {
  const [homeIsTrue, setHomeIsTrue] = useState(true);
  const [resumeIsTrue, setResumeIsTrue] = useState(false);
  const [aboutIsTrue, setAboutIsTrue] = useState(false);
  const [contactIsTrue, setContactIsTrue] = useState(false);
  return (
    <Fragment>
      <div className="hidden min-h-1365:hidden lg:flex">
        <BackImage/>
      </div>
      <AppContext.Provider value={{ homeIsTrue, setHomeIsTrue, resumeIsTrue, setResumeIsTrue, aboutIsTrue, setAboutIsTrue, contactIsTrue, setContactIsTrue }}>
        <div className="hidden min-h-1365:hidden lg:flex ">
          <Homepagecli />
        </div>
        <div className="flex min-h-1365:flex lg:hidden overflow-hidden">
          <HomepagecliM />
        </div>
      </AppContext.Provider>
      
    </Fragment>
  )
}
