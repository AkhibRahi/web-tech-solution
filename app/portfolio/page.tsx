import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Portfolio from '@/components/Portfolio';


export const metadata: Metadata = {
  title: "Portfolio Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};
const portfolioPage = () => {

  return (
    <div>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Portfolio />
    </div>
  )
}

export default portfolioPage
