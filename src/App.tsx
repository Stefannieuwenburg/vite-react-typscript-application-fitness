import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

import Navbar from "@/componenten/navbar";
import Home from "@/pages/home";
import OurClasses from "@/pages/ourclasses";
import Benefits from "@/pages/benefits";
import Footer from "./pages/footer";
import ContactUs from "@/pages/contactUs";


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfpage] = useState<boolean>(true);
  //for the top of the page menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfpage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfpage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="app bg-white-100 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} page={""} isMenuToggled={false}      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer  />
    </div>
 );
}
export default App;


