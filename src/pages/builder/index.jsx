import React from "react";
import Header from "@/components/header";
import Builder from "@/components/builder";
const builder = () => {
  return (
    <>
      <div className="bg-slate-800 container min-h-screen w-screen flex flex-col justify-center items-center">
        <Header></Header>
        <div>
          <Builder></Builder>
        </div>
        <div className="section-2 text-white">Section 2</div>
      </div>
    </>
  );
};

export default builder;
