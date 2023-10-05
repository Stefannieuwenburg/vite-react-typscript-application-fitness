import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Htext } from "@/shared/Htext";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-green-500 py-40">
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
                        <Htext><span className="text-black-100">OUR CLASSES BY</span> BASIC-FIT</Htext>
                        <p className="py-5">
                            At Basic-Fit you get many options for training in the gym. But we also believe that you can get fit wherever you want. Love for what you do, when you want and where you want, is the key to achieving your goals. Whether you want to train at the club, at home or outside, you decide. We are here to help you. And with the Basic-Fit app this becomes even more fun and easier!
                        </p>
                    </div>
                    {/* check fix for smal screens flex box*/}
                </motion.div>
                <div className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div className="mx-auto mb-10 max-w-[370px]">
                                    <div className="mb-8 overflow-hidden rounded">
                                        <img
                                            src={image1}
                                            alt="image"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h3>
                                            <p className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                            >
                                               Weight Training Classes
                                            </p>
                                        </h3>
                                        <p className="text-body-color text-base">
                                           Is fitness and wellness something for you? We believe the world will be a better and healthier place as more people follow a fitness and wellness lifestyle. Our mission is to make training a pleasant experience and to encourage people to achieve a better quality of life through fitness and wellness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div className="mx-auto mb-10 max-w-[370px]">
                                    <div className="mb-8 overflow-hidden rounded">
                                        <img
                                            src={image2}
                                            alt="image"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h3>
                                            <p className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                            >
                                               Yoga Classes
                                            </p>
                                        </h3>
                                        <p className="text-body-color text-base">
                                            Each  Yoga’s studios organise a wide selection of classes, that range from intensive Vinyasa courses to specialised sessions that are tailored around certain age groups. All three studios are exceptionally welcoming and organise additional mediation and community-driven events throughout the week.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses