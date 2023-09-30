
import { SelectedPage , BenefitType} from "@/shared/types";
import { motion } from "framer-motion";
import { HText } from "@/shared/Htext";
import Benefit from "./Benefit";
import benefits from "@/data/benefitsData";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsGraphic from "@/assets/BenefitPageGraphic.png";



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
                {/* Image and text*/}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* image*/}
                    <img className="mx-auto" alt="benefitsImage" src={BenefitsGraphic}/>

                    {/* Text*/}
                    <div>
                        {/* Title*/}
                        <div className={'relative'}>
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}</HText>
                                <span className="text-primary-600">FIT.</span>
                                </div>
                        </div>
                        {/* Description*/}
                        <div className="text-primary-600 my-5" >
                            <p>Je inschrijven bij Basic-Fit is een hele goede eerste zet. De volgende stap is je routine vinden! Basic-Fit helpt jou hierbij. Want als je gemotiveerd bent en blijft, ben je zeker op weg naar succes om van fitness jouw basic te maken. Na een korte online intake krijg je een persoonlijk trainingsschema voor de eerste 6 weken om je goed op weg te helpen. Daarnaast helpen onze Extra's je om gemotiveerd te blijven.</p>
                            <p className="text-primary-600 mb-5">Je kan je inschrijven bij Basic-Fit via de app en In al onze clubs vind je de nieuwste apparatuur van Matrix en TechnoGym. Alles wat je nodig hebt voor jouw perfecte workout! Je kunt je eigen workout doen in de trainingszones, of een virtuele les volgen in de GXR zaal voor groepslessen. Veel clubs bieden ook live groepslessen aan! </p>
                        </div>
                        {/* Button*/}
                        <div className="mt-16 relative">
                            <ActionButton setSelectedPage={setSelectedPage}>JOIN NOW</ActionButton>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
        
  )
}

export default Benefits;