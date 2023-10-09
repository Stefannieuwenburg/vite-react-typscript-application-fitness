import { useState, useEffect } from "react";

import Navbar from "@/componenten/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/home";
import OurClasses from "@/pages/ourclasses";
import Benefits from "@/pages/benefits";
import Footer from "./componenten/footer";
import ContactUs from "@/pages/contactUs";
//import Footer from "@/scenes/footer";



const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopofpage] = useState<boolean>(true);
  //for the top of the page menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofpage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopofpage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="app bg-white-100 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} page={""} isMenuToggled={false}   />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={function (_value: SelectedPage): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
   
 );
}
export default App;

//time 3.45 min contact page//
