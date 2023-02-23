import React, { useState } from "react";

const BuilderCard = (props) => {
  const { art, cid, inDeck, ability, source, cname } = props.props;
  const { toggle } = props;
  const className = inDeck ? "grayscale" : "";
  const [isHovering, setIsHovering] = useState(false);

  const descClass = `absolute -top-80 -left-20 bg-gray-700 bg-opacity-80 text-white transition-opacity p-4 rounded-md ${
    isHovering ? "opacity-100" : "opacity-0"
  }`;
  return (
    <div
      className='w-40 h-36 mb-10 flex-col cursor-pointer relative '
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={art} alt='' loading='lazy' className={className} onClick={() => toggle(cid)} />

      {isHovering && (
        <div className={`rounded-md  ${descClass}`}>
          <img src={art} alt='' />
          <p className='text-xl font-bold'>{cname}</p>
          <p className='text-xs font-semibold w-fit p-1 border rounded-lg mt-2'>{source}</p>
          <p className='w-fit mt-2 font-medium'>{ability}</p>
        </div>
      )}
    </div>
  );
};

export default BuilderCard;
