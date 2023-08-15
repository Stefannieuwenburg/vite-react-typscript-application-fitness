import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"
import {Props} from "@/shared/types"


const Link = ({ page,selectedPage,setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-300 hover:text-primary-300` }
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      
      
          {page}
    </AnchorLink>
  )
}

export default Link