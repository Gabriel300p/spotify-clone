import Head from "next/head";
import Center from "../components/Center";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        {/* SideBard */}
        <SideBar />

        {/* Center */}
        <Center />
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  );
}
