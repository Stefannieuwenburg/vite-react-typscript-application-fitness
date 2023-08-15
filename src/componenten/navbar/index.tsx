import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import {Props} from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
//import { SelectedPage } from "@/shared/types";
//import { ActionButton } from '@/shared/ActionButton';


const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled,setIsMenuToggled] = useState (false);
  return (
    <nav>
        <div className={`${flexBetween}fixed top-0 z-30 w-full`}>
            <div className={`${flexBetween}mx-auto w-5/6`}>
                <div className={`${flexBetween}w-full gap`}>
                      {/* left side*/}
                      <img src={Logo} alt="logo" />
            {/*right side*/}
            {isAboveMediumScreens ? (
                      <div className={`${flexBetween}w-full`}>
                          <div className={`${flexBetween}gap-8 text-sm`}>
                              <Link page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                              <Link page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                              <Link page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                              <Link page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} isMenuToggled={false} isTopOfPage={false}/>
                          </div>
                          <div className={`${flexBetween}gap-8`} >
                              <p>Sign In</p>
                              <button >Become a Member</button>
                </div>
              </div>
                ):(
                <button className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className= 'w-6 h-6 text-white' />
                </button>
                )}
                    </div>
                </div>
            </div>      
    </nav>
  )
}

export default Navbar;