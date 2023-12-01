import Transition from "@/components/Transition"
import Hero from "../components/Home/Home"
import Header from "@/components/Header/Header"
import { CountProvider } from "@/context/CountContext"
import Footer from "@/components/Footer/Footer"


export default function Home() {
  return (
    <>
      <CountProvider>
        <Header />
        <Hero />
        <Transition />
      </CountProvider>
      <Footer />
    </>

  )
}
