import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import React from "react";

function page() {
  return (
    <Layout>
      <div className="pt-16 text-center">
        <HeroSection
          title={"Contact us"}
          subtitle={
            "Send us a message using the form below, we will respond to your email as soo as possible"
          }
        />
        <Contact />
      </div>
    </Layout>
  );
}

export default page;
