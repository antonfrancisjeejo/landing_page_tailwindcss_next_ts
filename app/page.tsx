"use client";

import Blog from "@/components/Blog";
import BusinessServices from "@/components/BusinessServices";
import Contact from "@/components/Contact";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import RecentCases from "@/components/RecentCases";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import Team from "@/components/Team";
import "react-tabs/style/react-tabs.css";

export default function Home() {
  return (
    <div className="w-full justify-center items-center">
      <Header />
      <Landing />
      <BusinessServices />
      <Services />
      <RecentCases />
      <Team />
      <Blog />
      <Customers />
      <Contact />
      <Footer />
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}
