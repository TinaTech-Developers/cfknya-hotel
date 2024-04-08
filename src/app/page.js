"use client";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import View from "./components/View";
import Villas from "./components/Villas";
import Welcome from "./components/Welcome";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import { useState } from "react";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Welcome />
        <Villas />
        <View />
        <Gallery />
      </main>
    </Layout>
  );
}
