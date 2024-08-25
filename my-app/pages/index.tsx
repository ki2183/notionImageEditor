import { Inter } from "next/font/google";
import Page from "./UI/stack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-screen h-screen bg-white ${inter.className}`}
    >
      <Page/>
    </main>
  );
}
