import Benefits from "../../components/Benefits/Benefits"
import Caracteristics from "../../components/Caracteristics/Caracteristics"
import FAQ from "../../components/FAQ/FAQ."
import Start from "../../components/Start/Start"
import StartNow from "../../components/StartNow/StartNow"
import WhyUs from "../../components/WhyUs/WhyUs"
import IconsStatics from "../../components/iconsStatics/iconsStatics"

const Page = () => {
    return(
        <div>
            <IconsStatics />
            <Start />
            <Benefits />
            <WhyUs />
            <StartNow />
            <Caracteristics />
            <FAQ />
        </div>
    )
}

export default Page