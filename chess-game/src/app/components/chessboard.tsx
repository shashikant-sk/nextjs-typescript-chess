import React from "react";
import Tile from "./Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface ChessboardProps {
    image: string;
    x:number
    y:number
}

const Chessboard: React.FC<ChessboardProps> = () => {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const isBlackTile = (i + j) % 2 === 0;
      const tileStyle = isBlackTile ? "bg-lime-600" : "bg-lime-100";

      board.push(
        <div key={`${horizontalAxis[i]}${verticalAxis[j]}`} className={`w-[100px] h-[100px] grid place-content-center  ${tileStyle}`}>
          <Tile  number={i + j} />

          {/* [{horizontalAxis[i]} {verticalAxis[j]}] */}
        
        </div>
      );
    }
  }

  const gridStyle = {
    display: "grid",
    gridTemplateRows: "repeat(8, 100px)",
    gridTemplateColumns: "repeat(8, 100px)",
    backgroundColor: "blue",
    width: "800px",
    height: "800px",
  };

  return <div style={gridStyle}>{board}</div>;
};

export default Chessboard;
