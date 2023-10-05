import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div className="mt-5 rounded-xl border-10 bg-oranje-100 p-5 py-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}>
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-white-100 bg-secondary-600 p-4 ">
          {icon}
        </div>
      </div>
      <h4 className="fonts-bold text-black-100">{title}</h4>
      <p className="my-3 text-black-100 ">{description}</p>
      <AnchorLink className="text-sm font-bold text-black-100 underline" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}> <p className="text-black-100">Contact Us</p></AnchorLink>
    </motion.div>
  )
}

export default Benefit