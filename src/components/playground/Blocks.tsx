import React, { useState } from "react";
import { useGameContext } from "../../context/towerContext";
import { generateBlock } from "../../utils";

interface BlocksProps {
  item: Block;
  index: number;
  blockCount: number;
  setBlockCount: React.Dispatch<React.SetStateAction<number>>;
  activeWindow: number;
  setActiveWindow: React.Dispatch<React.SetStateAction<number>>;
  isGameStart: boolean;
}

const Blocks: React.FC<BlocksProps> = ({
  item,
  index,
  blockCount,
  setBlockCount,
  activeWindow,
  setActiveWindow,
  isGameStart,
}) => {
  const { setBlockList, level, setIsGameStart, setIsGameOver } =
    useGameContext();
  const [isClickedBtn, setIsClickedBtn] = useState<boolean>(false);
  return (
    <button
      key={index}
      onClick={
        isGameStart
          ? () => {
              if (item.type === "skull") {
                setIsGameStart(false);
                setIsGameOver(true);
                setBlockList((prev) => {
                  return prev.map((item) => ({ ...item, isShow: true }));
                });
                setIsClickedBtn(true);
              } else {
                setIsClickedBtn(true);
                setBlockList((prev) =>
                  prev.map((item) => {
                    return { ...item, isShow: activeWindow * 4 >= item.id };
                  })
                );
                setTimeout(() => {
                  setBlockCount(blockCount + 4);
                  setBlockList((prev) => {
                    return [
                      ...prev,
                      ...generateBlock(level, (blockCount + 4) / 4 - 1),
                    ]
                      .sort((a, b) => a.id - b.id)
                      .reverse();
                  });
                  setActiveWindow(activeWindow + 1);
                }, 500);
              }
            }
          : undefined
      }
      className={`${
        isClickedBtn
          ? `border ${
              item.type === "skull" ? "border-white" : "border-[#77ffab]"
            }`
          : ""
      } ${
        !item.isShow || item.type === "skull"
          ? "bg-[#444] disabled:bg-[#323232]"
          : "bg-[#2c3f34]"
      } rounded-md aspect-square ${
        activeWindow * 4 >= item.id && activeWindow * 4 - 4 < item.id
          ? `tile ${isGameStart ? "towerBoxStyle" : "cursor-auto"}`
          : ""
      }`}
      disabled={
        !(activeWindow * 4 >= item.id && activeWindow * 4 - 4 < item.id)
      }
    >
      {item.isShow ? (
        <div
          className={
            item.type === "skull"
              ? `skull-animation ${
                  isClickedBtn &&
                  activeWindow * 4 >= item.id &&
                  activeWindow * 4 - 4 < item.id
                    ? "skull-animate"
                    : ""
                }`
              : `coin-animation ${
                  isClickedBtn &&
                  activeWindow * 4 >= item.id &&
                  activeWindow * 4 - 4 < item.id
                    ? "coin-animate"
                    : ""
                }`
          }
        />
      ) : (
        <></>
      )}
    </button>
  );
};

export default Blocks;
