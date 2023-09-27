import Navbar from "@/componenten/navbar";
import Home from "@/pages/home";
//import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/pages/benefits";
//import ContactUs from "@/scenes/contactUs";
//import Footer from "@/scenes/footer";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";


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
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} page={""} isMenuToggled={false}   />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      {/* 
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
        */}
    </div>
   
 );
}
export default App;
//nav bar tot 1.44 
//time 2.30//
