import React, { useState } from "react";
import Header from "@/components/header";
import Builder from "@/components/builder";
import BuilderCard from "@/components/builderCard";
import CardsData from "../api/JsonCardsData";
import Search from "@/components/search";

const builder = () => {
  const [cards, setCards] = useState(allCardsdata);
  const [filteredList, setFilteredlist] = useState(allCardsdata);

  //function to change collected prop
  function toggle(cid) {
    console.log(cid);
  }

  return (
    <>
      <div className="bg-slate-800 container min-h-screen w-full flex flex-col justify-center items-center">
        <Header></Header>
        <Builder></Builder>
        <div className="flex flex-row">
          {/* <div className="flex flex-col">
            <div className="text-white"> Cost Component</div>
            <div className="text-white"> Power Component</div>
          </div> */}
        </div>
        <div className="flex flex-row  justify-center flex-2 ">
          <div className=" grid grid-cols-6 h-auto w-auto mr-2 ">
            {filteredList.map((c) => {
              return (
                <BuilderCard
                  props={c}
                  key={c.cid}
                  toggle={toggle}
                ></BuilderCard>
              );
            })}
          </div>
          <div className="flex-1">
            <Search></Search>
          </div>
        </div>
      </div>
    </>
  );
};

export default builder;

//create filtered list
const allCardsdata = CardsData.filter((c) => c.type === "Character")
  .filter((c) => c.source_slug !== "")
  .map((c) => {
    return { ...c, inDeck: false };
  });
