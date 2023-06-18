import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import DeckCard from "@/components/deckcard";
import BuilderCard from "@/components/builderCard";
import CardsData from "../api/JsonCardsData";
import Search from "@/components/search";
import Emptycard from "@/components/emptycard";
import Head from "next/head";

const Builder = () => {
  //allcards state
  const [cards, setCards] = useState(allCardsdata);
  //filter cards state
  const [filtered, setFiltered] = useState(cards);
  //state of cards in deck
  const [isIndeck, setIsIndeck] = useState([]);

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

  //return Name query string
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

  const handleCostFilter = (cost) => {
    if (cost == null) {
      return cards;
    }
    const filteredCost = cards.filter((card) => {
      return cost >= 6 ? card.cost >= 6 : card.cost == cost;
    });

    return filteredCost;
  };

  const handlePowerFilter = (power) => {
    if (power == null) return cards;
    if (power <= 0) {
      return cards.filter((card) => {
        return card.power <= power;
      });
    }
    const filteredPower = cards.filter((card) => {
      return power >= 7 ? card.power >= 7 : card.power == power;
    });

    return filteredPower;
  };

  //take input here and pass it  setFiltered through the function
  const updateFilteredState = (
    searchTerm,
    filterTerm,
    sourceTerm,
    cost,
    power
  ) => {
    const searchList = handleSearchTermChange(searchTerm);
    const filteredList = handleFilterChange(filterTerm);
    const sourceList = handleSourceChange(sourceTerm);
    const costList = handleCostFilter(cost);
    const powerList = handlePowerFilter(power);

    // filtering
    const updatedFilteredCards = searchList.filter(
      (card) =>
        filteredList.includes(card) &&
        sourceList.includes(card) &&
        costList.includes(card) &&
        powerList.includes(card)
    );

    //update state
    setFiltered(updatedFilteredCards);
  };

  //toggle card inDeck
  const handleindeckToggle = (cid) => {
    let updatedCards = cards.map((card) =>
      card.cid === cid ? { ...card, inDeck: !card.inDeck } : card
    );

    let updatedFilteredCards = filtered.map((card) =>
      card.cid === cid ? { ...card, inDeck: !card.inDeck } : card
    );

    // If the length of isIndeck is greater than or equal to 12
    if (isIndeck.length >= 12) {
      updatedCards = updatedCards.map((card) =>
        card.cid === cid && card.inDeck
          ? { ...card, inDeck: !card.inDeck }
          : card
      );

      updatedFilteredCards = updatedFilteredCards.map((card) =>
        card.cid === cid && card.inDeck
          ? { ...card, inDeck: !card.inDeck }
          : card
      );
    }
    //update both to sync the state
    setCards(updatedCards);
    setFiltered(updatedFilteredCards);
  };

  //ResetBtn
  const handleReset = () => {
    const updatedCards = cards.map((card) => ({ ...card, inDeck: false }));
    const updatedFilteredCards = filtered.map((card) => ({
      ...card,
      inDeck: false,
    }));

    setCards(updatedCards);
    setFiltered(updatedFilteredCards);
    setIsIndeck([]);
  };

  //render Deck
  function DeckBuilder() {
    useEffect(() => {
      const filteredCards = cards.filter((c) => c.inDeck === true);
      setIsIndeck(filteredCards);
    }, [cards]);

    return (
      <div className=" p-4 grid grid-cols-6 grid-rows-2 gap-2  border-2 border-zinc-400 bg-slate-900 rounded-lg mb-4 max-w-fit items-center justify-center">
        {Array.from({ length: 12 }, (_, i) => {
          const card = isIndeck[i];
          return card ? (
            <DeckCard key={card.cid} props={card} />
          ) : (
            <Emptycard key={i} />
          );
        })}
      </div>
    );
  }
  //generate base64 JsonString
  function generateDeckCode() {
    //filter for deck builder
    const cardsIndeck = cards.filter((c) => c.inDeck === true);

    //variable for json stringify
    const cardsId = cardsIndeck.map((card) => {
      return { CardDefId: card.carddefid };
    });
    //Create deck code
    const JsonObj = { Cards: cardsId };
    const JsonString = JSON.stringify(JsonObj);
    let objJsonB64 = Buffer.from(JsonString).toString("base64");
    return objJsonB64;
  }

  return (
    <>
      <Head>
        <title>MarvelSnap Deckbuilder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/superheroes-svgrepo-com.svg" />
      </Head>
      <Header></Header>

      <div className="bg-slate-800 min-w-full min-h-screen flex flex-col justify-start items-center ">
        <div className="p-5 mt-5">
          {/* deckBuilder components */}
          {DeckBuilder()}
          <div className="flex gap-2">
            {/* deckCode Btn */}
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center"
              onClick={() => navigator.clipboard.writeText(generateDeckCode())}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>COPPY</span>
            </button>
            {/* ResetBtn */}
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => {
                console.log("ResetBtn Clicked");
                handleReset();
              }}
            >
              RESET
            </button>
          </div>
        </div>

        <Search updateFilteredState={updateFilteredState}></Search>
        <div className="mt-4">
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

export default Builder;

//create filtered list
const allCardsdata = CardsData.filter((c) => c.type === "Character")
  .filter((c) => c.source_slug !== "")
  .map((c) => {
    return { ...c, inDeck: false };
  });
