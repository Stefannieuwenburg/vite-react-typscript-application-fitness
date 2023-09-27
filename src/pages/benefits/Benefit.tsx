import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value:SelectedPage)=>void;
}

const Benefit = ({icon, title, description,setSelectedPage}: Props) => {
  return (
      <motion.div className="mt-5 rounded-md border-2 bg-gray-100 p-5 py-16 text-center"
      initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{  duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
          <div className="mb-4 flex justify-center">
              <div className="rounder-full border-2 border-gray-600 bg-primary-600 p-4 ">
                  {icon}
              </div>
          </div>
          <h4 className="fonts-bold">{title}</h4>
          <p className="my-3">{description}</p>
          <AnchorLink className="text-sm font-bold text-primary-500 underline" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}> <p className="text-primary-600">Contact Us</p></AnchorLink>
    </motion.div>
  )
}

export default Benefit