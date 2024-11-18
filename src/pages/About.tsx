import Head from "../components/Head"
import Brands from "../sections/about/Brands"
import ContactInfo from "../sections/about/ContactInfo"
import Info from "../sections/about/Info"
import Contacts from "../sections/shared/Contacts"


const About = () => {
    return (
        <>
            <Head
                description=""
                keywords=""
                title=""
            />
            <main>
                <Info />
                <ContactInfo />
                <Brands />
                <Contacts />
            </main>
        </>
    )
}

export default About