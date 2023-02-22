import React, { useState } from "react";
import Header from "@/components/header";
import DeckCard from "@/components/deckcard";
import BuilderCard from "@/components/builderCard";
import CardsData from "../api/JsonCardsData";
import Search from "@/components/search";
import Emptycard from "@/components/emptycard";

const builder = () => {
  //allcards state
  const [cards, setCards] = useState(allCardsdata);
  //filter cards state
  const [filtered, setFiltered] = useState(cards);

  //return Search query string
  const handleSearchTermChange = (searchTerm) => {
    const searchList = cards.filter((card) => {
      const searchMatches = card.cname
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return searchMatches;
    });
    return searchList;
  };

  //return Ability query string
  const handleFilterChange = (filterTerm) => {
    const filteredList = cards.filter((card) => {
      const filterMatches = card.ability
        .toLowerCase()
        .includes(filterTerm.toLowerCase());
      return filterMatches;
    });
    return filteredList;
  };
  // return Source query String
  const handleSourceChange = (sourceTerm) => {
    const filteredSource = cards.filter((card) => {
      const sourceMatches = card.source_slug
        .toLowerCase()
        .includes(sourceTerm.toLowerCase());
      return sourceMatches;
    });
    return filteredSource;
  };

  //take input here and pass it  setFiltered through the function
  const updateFilteredState = (searchTerm, filterTerm, sourceTerm) => {
    const searchList = handleSearchTermChange(searchTerm);
    const filteredList = handleFilterChange(filterTerm);
    const sourceList = handleSourceChange(sourceTerm);

    // filtering
    const updatedFilteredCards = searchList.filter(
      (card) => filteredList.includes(card) && sourceList.includes(card)
    );
    //update state
    setFiltered(updatedFilteredCards);
  };

  //handle indeck toggle
  const handleindeckToggle = (cid) => {
    const updatedCards = cards.map((card) => {
      return card.cid === cid ? { ...card, inDeck: !card.inDeck } : card;
    });

    const updatedFilteredCards = filtered.map((card) => {
      return card.cid === cid ? { ...card, inDeck: !card.inDeck } : card;
    });

    setCards(updatedCards);
    setFiltered(updatedFilteredCards);
  };

  //filter for deck builder
  const isIndeck = cards.filter((c) => c.inDeck === true);
  //variable for json stringify
  const cardsId = isIndeck.map((card) => {
    return { CardDefId: card.carddefid };
  });

  const JsonObj = { Cards: cardsId };
  const JsonString = JSON.stringify(JsonObj);
  //deck code
  let objJsonB64 = Buffer.from(JsonString).toString("base64");
  console.log(objJsonB64);

  const components = [];
  // deckbuilder
  function renderDeck() {
    isIndeck.map((card) => {
      return components.push(<DeckCard key={card.cid} props={card} />);
    });
    if (isIndeck.length < 12) {
      for (let i = isIndeck.length; i < 12; i++) {
        components.push(<Emptycard key={i} />);
      }
    }
  }
  renderDeck();
  return (
    <>
      <Header></Header>

      <div className="bg-slate-800 min-w-full min-h-screen flex flex-col justify-start items-center ">
        <div className=" p-2 grid grid-cols-6 grid-rows-2 gap-2  border-4 border-gray-500 rounded-lg bg-black mb-4 max-w-fit items-center justify-center">
          {components}
        </div>
        <Search updateFilteredState={updateFilteredState}></Search>
        <div className="block">
          <div className=" grid grid-cols-6 h-auto w-auto mr-2 max-w-fit">
            {filtered.map((c) => {
              return (
                <BuilderCard
                  props={c}
                  key={c.cid}
                  toggle={handleindeckToggle}
                ></BuilderCard>
              );
            })}
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
