"use client";
import Transition from "@/components/Transition/Transition";
import Hero from "../components/Home/Home";
import { MyContextProvider } from "@/context/MyDataContext";

export default function Home() {
  return (
    <main className="m-auto max-w-xl">
      <MyContextProvider>
        <Hero />
        <Transition />
      </MyContextProvider>
    </main>
  );
}
