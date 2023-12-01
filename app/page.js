import Transition from "@/components/Transition"
import Hero from "../components/Home/Home"
import Header from "@/components/Header/Header"
import { CountProvider } from "@/context/CountContext"


export default function Home() {
  return (
    <>
      <CountProvider>
        <Header />
        <Hero />
        <Transition />
      </CountProvider>
    </>

  )
}
