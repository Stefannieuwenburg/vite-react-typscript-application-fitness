import {  BenefitType} from "@/shared/types";
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from "@heroicons/react/24/solid";


const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the art Facilities",
        description: "We use State of the art Facilities and cutting-edge equipment white trainers to help you reach your fitness goals.",

    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "More than 50 Diverse Classes",
        description: "we haveMore than 50 Diverse Classes, and we use cutting-edge equipment and trainers to help you reach your fitness goals.",

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Experts and Pro trainers",
        description: "Experts and Pro trainers are ready to help you, We use cutting-edge equipment and trainers to help you reach your fitness goals.",

    },
]


export default benefits