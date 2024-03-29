import Card from "@/components/card";
import Header from "@/components/header";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import CardsData from "./api/JsonCardsData";

export default function Home() {
  // const [cards, setCards] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     const storedCards = localStorage.getItem("cards");

  //     return storedCards ? JSON.parse(storedCards) : allCardsdata;
  //   } else {
  //     return allCardsdata;
  //   }

  // });

  // Save cards to localStorage whenever it changes

  //cards state
  const [cards, setCards] = useState(allCardsdata);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const pool_1 = cards.filter(
    (c) => c.source_slug === "pool-1" || c.source_slug === "collection-level"
  );
  const pool_2 = cards.filter((c) => c.source_slug === "pool-2");
  const pool_3 = cards.filter((c) => c.source_slug === "pool-3");
  const pool_4 = cards.filter((c) => c.source_slug === "pool-4");
  const pool_5 = cards.filter((c) => c.source_slug === "pool-5");
  const starter = cards.filter((c) => c.source_slug === "starter-card");
  const seasonPass = cards.filter((c) => c.source_slug === "season-pass");

  const starter_len = starter.length;
  const pool_1_len = pool_1.length;
  const pool_2_len = pool_2.length;
  const pool_3_len = pool_3.length;
  const pool_4_len = pool_4.length;
  const pool_5_len = pool_5.length;
  const seasonPass_len = seasonPass.length;

  const [collectedstarter, setCollectedStarter] = useState(0);
  const [collectedpool1, setCollectedpool1] = useState(0);
  const [collectedpool2, setCollectedpool2] = useState(0);
  const [collectedpool3, setCollectedpool3] = useState(0);
  const [collectedpool4, setCollectedpool4] = useState(0);
  const [collectedpool5, setCollectedpool5] = useState(0);
  const [collectedSeasonPass, setcollectedSeasonPass] = useState(0);

  //function to change collected prop
  function toggle(cid) {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return card.cid === cid
          ? { ...card, collected: !card.collected }
          : card;
      });
    });
  }

  function addAllCard(array) {
    setCards((prev) => {
      return prev.map((item) => {
        if (array.includes(item)) {
          return { ...item, collected: true };
        }
        return item;
      });
    });
  }

  useEffect(() => {
    setCollectedStarter(starter.filter((card) => card.collected).length);
    setCollectedpool1(pool_1.filter((card) => card.collected).length);
    setCollectedpool2(pool_2.filter((card) => card.collected).length);
    setCollectedpool3(pool_3.filter((card) => card.collected).length);
    setCollectedpool4(pool_4.filter((card) => card.collected).length);
    setCollectedpool5(pool_5.filter((card) => card.collected).length);
    setcollectedSeasonPass(seasonPass.filter((card) => card.collected).length);
  }, [cards]);

  //add all btn
  function addBtn(arr) {
    return (
      <button
        className=" hover:border-purple-500 hover:text-purple-500 text-white font-semibold h-12  mt-2 py-2 px-4 border-2 border-gray-400 rounded shadow"
        onClick={() => addAllCard(arr)}
      >
        Add All
      </button>
    );
  }

  return (
    <>
      <Header></Header>
      <div className=" bg-slate-800 min-w-full min-h-screen flex flex-col justify-center items-center">
        <Head>
          <title>MarvelSnap Deckbuilder</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/superheroes-svgrepo-com.svg" />
        </Head>

        <div className="collection-containner w-3/4 ">
          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Starter Cards &#40;{collectedstarter}/{starter_len}&#41;
            </h2>
            {addBtn(starter)}
          </div>

          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {starter.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>
          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Pool 1 Cards &#40;{collectedpool1}/{pool_1_len}&#41;
            </h2>
            {addBtn(pool_1)}
          </div>

          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {pool_1.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>
          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Pool 2 Cards &#40;{collectedpool2}/{pool_2_len}&#41;
            </h2>
            {addBtn(pool_2)}
          </div>
          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {pool_2.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>

          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Pool 3 Cards &#40;{collectedpool3}/{pool_3_len}&#41;
            </h2>
            {addBtn(pool_3)}
          </div>

          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {pool_3.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>

          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Pool 4 Cards &#40;{collectedpool4}/{pool_4_len}&#41;
            </h2>
            {addBtn(pool_4)}
          </div>

          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {pool_4.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>

          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Pool 5 Cards &#40;{collectedpool5}/{pool_5_len}&#41;
            </h2>
            {addBtn(pool_5)}
          </div>
          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {pool_5.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>

          <div className="flex items-center justify-start pb-3 ">
            <h2 className="text-white text-5xl font-bold m-4 pl-12">
              Season Pass Cards &#40;{collectedSeasonPass}/{seasonPass_len}&#41;
            </h2>
            {addBtn(seasonPass)}
          </div>
          <div className="cardContainer flex flex-wrap place-content-start  h-full w-full pl-10">
            {seasonPass.map((c) => (
              <Card props={c} key={c.cid} toggle={toggle}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//cread filtered list
const allCardsdata = CardsData.filter((c) => c.type === "Character").map(
  (c) => {
    return { ...c, collected: false };
  }
);

//summon
console.log(
  CardsData.filter((c) => c.source_slug === "").filter(
    (c) => c.type === "Summon"
  )
);
