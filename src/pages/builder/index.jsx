import React, { useState } from "react";
import Header from "@/components/header";
import Builder from "@/components/builder";
import BuilderCard from "@/components/builderCard";
import CardsData from "../api/JsonCardsData";
import Search from "@/components/search";

const builder = () => {
  //allcards state
  const [cards, setCards] = useState(allCardsdata);
  //filter cards state
  const [filtered, setFiltered] = useState(cards);

  //handle query
  const handleSearchTermChange = (searchTerm) => {
    const filteredList = cards.filter((card) =>
      card.cname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filteredList);
  };

  //handle indeck toggle
  const handleToggle = (cid) => {
    console.log(cid);
    const updatedCards = cards.map((card) => {
      return card.cid === cid ? { ...card, inDeck: !card.inDeck } : card;
    });

    const updatedFilteredCards = filtered.map((card) => {
      return card.cid === cid ? { ...card, inDeck: !card.inDeck } : card;
    });

    setCards(updatedCards);
    setFiltered(updatedFilteredCards);
  };

  return (
    <div className="bg-slate-800  min-h-screen w-screen flex flex-col justify-start items-center">
      <Header></Header>

      <Builder></Builder>

      <Search onSearchTermChange={handleSearchTermChange}></Search>

      <div className=" grid grid-cols-6 h-auto w-auto mr-2 ">
        {filtered.map((c) => {
          return (
            <BuilderCard
              props={c}
              key={c.cid}
              toggle={handleToggle}
            ></BuilderCard>
          );
        })}
      </div>
    </div>
  );
};

export default builder;

//create filtered list
const allCardsdata = CardsData.filter((c) => c.type === "Character")
  .filter((c) => c.source_slug !== "")
  .map((c) => {
    return { ...c, inDeck: false };
  });
