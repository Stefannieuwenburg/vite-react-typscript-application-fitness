
import { SelectedPage , BenefitType} from "@/shared/types";
import { motion } from "framer-motion";
import { HText } from "@/shared/Htext";
import Benefit from "./Benefit";
import benefits from "@/data";




type Props = {
   setSelectedPage:(value:SelectedPage)=>void 
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
      
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header*/}
                <motion.div className="md:m-5 md:w-3/5"
                initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                 <HText>MORE THAN JUST A GYM</HText> 
                    <p className="my-5 text-m">we provide world class fitness equipment,
                       world class trainers and classes to get you to your ultimate fitness goals with ease,
                      And we have everything you need to live a healthy lifestyle
                    </p>
                </motion.div>
                {/* Benfits*/}
                <div className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit:BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
        
  )
}

export default Benefits;