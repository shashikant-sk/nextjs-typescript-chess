import React from 'react';

interface TileProps {
  number: number;
}

const Tile: React.FC<TileProps> = ({ number }) => {

  if (number % 2 === 0) {
    return <div className="isBlackTile">Hello</div>;
  } else {
    return <div className="isWhiteTile">Hello</div>;
  }
  
};

export default Tile;
