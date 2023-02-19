import React from "react";
import Header from "@/components/header";
import Builder from "@/components/builder";
const builder = () => {
  return (
    <div className="bg-slate-800 min-h-screen ">
      <Header></Header>
      <Builder></Builder>
      <h2>Filtering Component</h2>
      <h2>Cards</h2>
    </div>
  );
};

export default builder;
