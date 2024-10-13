import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen">
      <header>
        <Header />
      </header>
      <main>
        <Card />
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default page;
