import React from "react";
import Chessboard from "./components/chessboard";

interface PageProps {
  // Props for the Page component, if needed
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <div className="grid place-content-center h-[130vh] bg-[#202020]">
        <Chessboard image={""} x={0} y={0}/>
      </div>
    </main>
  );
};

export default Page;
