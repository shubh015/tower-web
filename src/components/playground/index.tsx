import React from "react";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import { useGameContext } from "../../context/towerContext";
import TileButton from "./Blocks";

const Playground: React.FC = () => {
  const {
    blockCount,
    setBlockCount,
    blockList,
    activeWindow,
    setActiveWindow,
    isGameStart,
    isGameOver,
  } = useGameContext();

  return (
    <div className="bg-[#292929] w-full min-w-[450px] h-full p-6 flex justify-start items-stretch flex-col">
      <p className="font-bch uppercase text-center text-lg mb-6 text-white">
        Max Payout x73.33
      </p>

      <div
        id="gameAreaWrapper"
        className="bg-[#202020] scroll-smooth rounded-md flex-1 h-full overflow-hidden relative px-6 before:bg-[linear-gradient(-180deg,_rgba(20,_20,_20,_0.8)_0%,_rgba(20,_20,_20,_0)_100%)] before:z-10 after:z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[150px] after:bg-[linear-gradient(0deg,_rgba(20,_20,_20,_0.8)_0%,_rgba(20,_20,_20,_0)_100%)] after:bottom-0 after:left-0 after:w-full after:h-[150px] after:absolute"
      >
        <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 text-white">
          <VscTriangleRight className="text-4xl" />
        </div>
        <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 text-white">
          <VscTriangleLeft className="text-4xl" />
        </div>
        {isGameOver && (
          <div className="absolute font-bch rounded-t-[15px] uppercase z-20 bottom-0 py-[2px] px-6 bg-white left-1/2 -translate-x-1/2">
            <p>Game over. Try Again</p>
          </div>
        )}
        <div
          id="gameArea"
          style={{ transform: "translateY(-100%)", transition: ".5s ease" }}
          className="grid w-[70%] grid-cols-4 gap-3 mx-auto"
        >
          {blockList.map((item, index) => {
            return (
              <TileButton
                key={item.id}
                item={item}
                index={index}
                activeWindow={activeWindow}
                isGameStart={isGameStart}
                setActiveWindow={setActiveWindow}
                setBlockCount={setBlockCount}
                blockCount={blockCount}
              />
            );
          })}
        </div>

        <div
          id="gameSkullAnimateIcon"
          className="flex justify-center items-center mt-4 gap-2"
          style={{ transform: "translateY(-900%)", transition: ".5s ease" }}
        >
          {isGameStart ? (
            <img
              src="/images/game-start-hand-left.webp"
              className="hand-bounce animate-delay-100"
              alt="game start left hand"
            />
          ) : (
            isGameOver && (
              <img
                src="/images/game-over-hand-left.webp"
                className="hand-bounce-game-over-left"
                alt="game over left hand"
              />
            )
          )}
          {!isGameOver ? (
            <img src="/images/game-start.webp" alt="game start skull" />
          ) : (
            <>
              <img src="/images/game-over-skull.webp" alt="game over skull" />
            </>
          )}
          {isGameStart ? (
            <div style={{ transform: "rotateY(180deg)" }}>
              <img
                className="hand-bounce"
                src="/images/game-start-hand-right.webp"
                alt="game start right hand"
              />
            </div>
          ) : (
            isGameOver && (
              <div style={{ transform: "rotateY(180deg)" }}>
                <img
                  className="hand-bounce-game-over-left "
                  src="/images/game-over-hand-right.webp"
                  alt="game over right hand"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
