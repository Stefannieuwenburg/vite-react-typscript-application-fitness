import { SelectedPage } from "@/shared/types";
import { useForm} from "react-hook-form"
import { motion } from "framer-motion"
import { Htext } from "@/shared/Htext";
import ContactGirl from "@/assets/contactGirl.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg placeholder-white bg-black-100 p-3`

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
     }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pd-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/*Header */}
                <motion.div className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <Htext>
                        <span className="text-black-100">JOIN NOW</span> TO GET IN SHAPE
                    </Htext>
                    <p className="my-5">
                        fill up the form below and we will get back to you within 24 hours
                        to confirm your booking with us
                        a member of our team will be in touch with you shortly.
                    </p>
                </motion.div>

                {/*Form and image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}>
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form
                        target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/nieuwenburg.stefan@gmail.com"
                            method="POST"
                        >
                            <input className={inputStyles} type="text" placeholder="Name"
                                {...register("name", { required: true, maxLength: 100, })} />
                            {errors.name && (
                            <p className="mt-1 text-red-500">
                                {errors.name.type === "required" && "this field is required"} 
                                {errors.name.type === "maxLength" && "Max length is 100"}
                            </p>
                            )}
                            <input className={inputStyles} type="text" placeholder="Email"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+\@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,})} />
                            {errors.email && (
                                <p className="mt-1 text-red-500">
                                    {errors.email.type === "required" && "this field is required"}
                                    {errors.email.type === "pattern" && "invallid email address"}
                                </p>
                            )}
                            <textarea className={inputStyles} placeholder="Message" rows={4} cols={50}
                                {...register("message", { required: true, maxLength: 2000, })} />
                            {errors.message && (
                                <p className="mt-1 text-red-500">
                                    {errors.message.type === "required" && "this field is required"}
                                    {errors.message.type === "maxLength" && "Max length is 2000"}
                                </p>
                            )}
                            <button
                                type="submit" className="mt-5 rounded-lg px-20 py-3  bg-secondary-600  hover:bg-primary-600 hover:text-white"
                           >Submit
                        </button>
                    </form>
                    </motion.div>
                    <motion.div className="mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2,duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <div>
                            <img src={ContactGirl} alt="contact-graphic" />
                        </div>
                        
                    </motion.div>
            </div>
            </motion.div>
        </section>


    )
}
export default ContactUs;