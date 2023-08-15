import Navbar from "@/componenten/navbar";
//import Home from "@/scenes/home";
//import OurClasses from "@/scenes/ourClasses";
//import Benefits from "@/scenes/benefits";
//import ContactUs from "@/scenes/contactUs";
//import Footer from "@/scenes/footer";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  
  return (
    <div className="app bg-gray-20 ">
       <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} page={""} isMenuToggled={false} isTopOfPage={false}  />
      {/* <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
        */}
    </div>
   
 );
}
export default App;
//1.28
