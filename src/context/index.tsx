import { PropsWithChildren, useEffect, useState } from "react";
import { TowerContext } from "./towerContext";
import { generateBlock } from "../utils";

const setInnerElem = () => {
  const gameArea = document.getElementById("gameArea");
  const gameAreaWrapper = document.getElementById("gameAreaWrapper");
  const gameSkullAnimateIcon = document.getElementById("gameSkullAnimateIcon");
  if (gameArea && gameAreaWrapper && gameSkullAnimateIcon) {
    const tile = document.querySelector(".tile");
    const gameAreaWrapperHeight =
      gameAreaWrapper.getBoundingClientRect().height;

    const gameAreaHeight = gameArea.getBoundingClientRect().height;
    const tileHeight = tile ? tile.getBoundingClientRect().height : 0;

    gameArea.style.transform = `translateY(${
      gameAreaWrapperHeight / 2 - gameAreaHeight + tileHeight / 2
    }px)`;

    gameSkullAnimateIcon.style.transform = `translateY(${
      gameAreaWrapperHeight / 2 - gameAreaHeight + tileHeight / 2
    }px)`;
  }
};

const GameContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(2);
  const [blockCount, setBlockCount] = useState<number>(24);
  const [activeWindow, setActiveWindow] = useState<number>(1);
  const [blockList, setBlockList] = useState<Block[]>([]);
  const [resetComponent, setResetComponent] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const list = Array(24 / 4)
      .fill(0)
      .map((_item, index) => {
        return generateBlock(2, index);
      });
      setBlockList(list.flat().reverse());
  }, []);

  const handleGameOverAndStart = () => {
    if (isGameOver) {
      const list = Array(24 / 4)
        .fill(0)
        .map((_item, index) => {
          return generateBlock(level, index);
        });

        setBlockList(list.flat().reverse());
      setResetComponent((prev) => !prev);
      setIsGameOver(false);
      setIsGameStart(true);
      setBlockCount(24);
      setActiveWindow(1);
      setTimeout(() => {
        setInnerElem();
      }, 10);
    } else {
      setIsGameStart(true);
      setIsGameOver(false);
      const list = Array(24 / 4)
        .fill(0)
        .map((_item, index) => {
          return generateBlock(level, index);
        });

        setBlockList(list.flat().reverse());
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setInnerElem();
    });

    window.addEventListener("resize", () => {
      setInnerElem();
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const value = {
    isGameStart,
    setIsGameStart,
    isGameOver,
    setIsGameOver,
    level,
    setLevel,
    blockCount,
    setBlockCount,
    activeWindow,
    setActiveWindow,
    blockList,
    setBlockList,
    handleGameOverAndStart,
    price,
    setPrice,
  };
  return (
    <TowerContext.Provider key={`${resetComponent}`} value={value}>
      {children}
    </TowerContext.Provider>
  );
};

export default GameContextProvider;
