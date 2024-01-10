
import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "WebaholicTech: Innovate, Create, Dominate",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
 
  return (
    <>
     <HomePage />
      
    </>
  );
}
