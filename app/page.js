"use client";
import Transition from "@/components/Transition";
import Hero from "../components/Home/Home";
import { DataContext } from "@/context/DataContext"

const Home = () => {
  return (
    <main className="m-auto max-w-xl">

      <DataContext>
        <Hero />
        <Transition />
      </DataContext>

    </main>
  );
}
export default Home;
