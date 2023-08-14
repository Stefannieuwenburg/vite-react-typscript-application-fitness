import Navbar from "@/componenten/navbar";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const App = () => {
   const [selectedPage, setSelectedPage] = useState<string>("home");


 return (
    <div className="app bg-gray-20 ">
       <Navbar
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}/>
       
    </div>
   
 );
}
export default App;



//1.07
