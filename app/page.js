"use client";
import Transition from "@/components/Transition";
import Hero from "../components/Home/Home";
import { MyProvider } from "@/context/MyContext";

export default function Home() {
  return (
    <main className="m-auto max-w-xl">
      <MyProvider>
        <Hero />
        <Transition />
      </MyProvider>
    </main>
  );
}
