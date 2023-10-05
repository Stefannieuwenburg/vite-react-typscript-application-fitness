import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
    children: React.ReactNode 
    setSelectedPage: (value: SelectedPage) => void;
}
export const ActionButton = ({children,setSelectedPage}:Props) => {
  return (
    <AnchorLink className="rounded-md bg-secondary-600 px-2 py-1 hover:bg-primary-600 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}>
          {children}
    </AnchorLink>
  )
}
