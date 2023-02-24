import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-20 items-center text-white text-2xl font-semibold bg-zinc-900 border-b-2  py-3 px-96">
      <div className="flex justify-center items-center gap-2 text-white text-2xl font-semibold ">
        <object
          data="superheroes-svgrepo-com.svg"
          width="50"
          height="50"
          type=""
        ></object>
        <h1> MarvelSnap</h1>
      </div>
      <div className="flex gap-5">
        <Link href="/">
          <h1>Collection</h1>
        </Link>
        <Link href="/builder">
          <h1>DeckBuilder</h1>
        </Link>
      </div>
    </nav>
  );
}

// <div className="text-2xl text-white h-14 bg-slate-800">
