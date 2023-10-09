import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from "@/assets/Basic-Fit-logo.png";
import Link from "../link";
import {Props} from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from '@/shared/ActionButton';



const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ?"":"bg-white-100 drop-shadow"
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween}fixed top-10 z-10 w-full justify-between `}>
            <div className={`${flexBetween}w-full gap-20`}>
                <div className={`${flexBetween}w-full gap-20`}>
                  {/* left side*/}
                      <img src={Logo} alt="logo" />
                 {/*right side*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}w-full gap-20`}>
                          <div className={`${flexBetween}w-full gap-8 text-m`}>
                              <Link page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="OurClasses"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="ContactUs"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                          </div>
                          <div className={`${flexBetween}gap-8`} >
                              <p >Sign In</p>
                              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
                ):(
                <button 
                   className='rounded-full bg-secondary-600 p-2 ' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className= 'w-6 h-6 text-white' />
                </button>
                )}
                    </div>
                </div>
      </div>  
      {/*mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed richt-0 bottom-0 z-40 h-full w-[300px] bg-white-100 drop-shadow-xl">
           {/*close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
             <XMarkIcon className="h-6 w-6 text-secondary-600"/>
            </button>
          </div>
           {/*menu items */}
         
                  <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                              <Link page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="OurClasses"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false} />
                              <Link page="ContactUs"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;