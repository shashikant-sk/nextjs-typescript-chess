import React from 'react';

interface TileProps {
  image?:string
  number: number;
}

const Tile: React.FC<TileProps> = ({ number , image }) => {

  if (number % 2 === 0) {
    return <div className="isBlackTile"><img className='w-[80px]' src='assets/image/Chess_pdt60.png'/> </div>;
  } else {
    return <div className="isWhiteTile"><img className='w-[80px]' src='assets/image/Chess_plt60.png'/></div>;
  }

};

export default Tile;
