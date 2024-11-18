import Head from "../components/Head"
import Hero from "../sections/home/Hero"
import Info from "../sections/home/Info"
import Services from "../sections/home/Services"
import Contacts from "../sections/shared/Contacts"


const Home = () => {
  return (
    <>
      <Head
        description=""
        keywords=""
        title=""
      />
      <main>
        <Hero />
        <Services />
        <Info />
        <Contacts />
      </main>
    </>
  )
}

export default Home
