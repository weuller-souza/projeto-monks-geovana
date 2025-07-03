import React from "react";
import Header from "../layouts/Header";
import Banner from "../components/Banner";
import Description from "../components/Description";
import Cards from "../components/Cards";
import List from "../components/List";
import Table from "../components/Table";
import About from "../components/About";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Banner/>
      <Description/>
      <List/>
      <Cards/>
      <Table/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}
