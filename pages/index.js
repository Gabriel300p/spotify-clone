import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        {/* SideBard */}
        <SideBar/>

        {/* Center */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  );
}
