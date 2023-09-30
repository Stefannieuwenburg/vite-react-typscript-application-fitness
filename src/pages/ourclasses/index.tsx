import { OurClassesType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Htext } from "@/shared/Htext";
import OurClassesData from "@/data/ourClassesData";
import Class from "./Class";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                {/* Header*/}
                <motion.div className="mx-auto w-5/6"
                initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
                  }}>
                  <div className="md:w-3/5">
                     <Htext>OUR CLASSES</Htext> 
                      <p className="py-5">
                          Bij Basic-Fit krijg je veel opties om te trainen in de sportschool. Maar we geloven ook dat je fit kunt worden waar je maar wilt. Liefde voor wat je doet, wanneer je wilt en waar je wilt, is de sleutel tot het bereiken van je doelen. Of je nu in de club, thuis of buiten wil trainen, jij bepaalt het zelf. Wij zijn er om jou te helpen. En met de Basic-Fit app wordt dat nog leuker en makkelijker!
                      </p>
                  </div>
              </motion.div>  
              <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
                  <ul className="w-[2800px] whitespace-nowrap">
                      {OurClassesData.map((item: OurClassesType, index) => (
                          <Class
                          key={`${item.name}-${index}`}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                      />
                      ))}
                  </ul>
              </div>  
          </motion.div>
    </section>
  )
}

export default OurClasses