
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import { Htext } from "@/shared/Htext";
import Benefit from "./Benefit";
import benefits from "@/data/benefitsData";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsGraphic from "@/assets/Girls middle.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void
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
                    <Htext> <span className="text-black-100">ITS JUST MORE THAN A GYM</span> BASIC-FIT</Htext>
                    <p className="my-5 text-m">we provide world class fitness equipment,
                        world class trainers and classes to get you to your ultimate fitness goals with ease,
                        And we have everything you need to live a healthy lifestyle
                    </p>
                </motion.div>
                {/* Benfits*/}
                <div className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
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
                <div className="mt-16 items-center justify-between gap-10 md:mt-30 md:flex">
                    {/* image*/}
                    <img className="mx-auto" alt="benefitsImage" src={BenefitsGraphic} />

                    {/* Text*/}
                    <div>
                        {/* Title*/}
                        <div className={'relative'}>
                            <div>
                                <Htext><span className="text-black-100">MILLIONS OF HAPPY MEMBERS GETTING FIT BY </span> BASIC-FIT{" "}</Htext>

                            </div>
                        </div>
                        {/* Description*/}
                        <div className="text-primary-600 my-5" >
                            <p>Registering with Basic-Fit is a very good first move. The next step is finding your routine! Basic-Fit helps you with this. Because if you are and remain motivated, you are certainly on your way to success by making fitness your basic. After a short online intake, you will receive a personal training schedule for the first 6 weeks to help you get started. In addition, our Extras help you stay motivated</p>
                            <p className="text-primary-600 mb-5"> You can register with Basic-Fit via the app and in all our clubs you will find the latest equipment from Matrix and TechnoGym. Everything you need for your perfect workout! You can do your own workout in the training zones, or take a virtual lesson in the GXR room for group lessons. Many clubs also offer live group lessons!</p>
                        </div>
                        {/* Button*/}
                        <div className="mt-16 relative">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>

    )
}

export default Benefits;