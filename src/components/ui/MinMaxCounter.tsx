import React from "react";
import { useGameContext } from "../../context/towerContext";

interface MinMaxToggleProps {
  className?: string;
}
const MinMaxToggle: React.FC<MinMaxToggleProps> = ({ className }) => {
  const { isGameStart, price, setPrice } = useGameContext();
  const handleIncrementDecrement = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setPrice((prev) => prev + 0.00000005);
    } else {
      setPrice((prev) => prev - 0.00000005);
    }
  };

  return (
    <div
      className={`mt-5 border-[#444] border-[2px] rounded-lg p-[4px] bg-[#202020] font-bch flex justify-between items-center ${
        isGameStart ? "brightness-75 !cursor-no-drop" : ""
      } ${className}`}
    >
      <div className="buttons w-[20%] gap-[4px] flex justify-center items-center flex-col">
        <button
          disabled={isGameStart || price === 0}
          className="disabled:cursor-no-drop bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1"
          onClick={() => handleIncrementDecrement("decrement")}
        >
          -
        </button>
        <button
          disabled={isGameStart}
          className="disabled:cursor-no-drop bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1"
        >
          MIN
        </button>
      </div>
      <div className="count text-white flex justify-center flex-col items-center">
        <p className="text-2xl">{price.toFixed(8)}</p>
        <p className="text-[#999] uppercase">$0.00 stake</p>
      </div>
      <div className="buttons w-[20%] gap-[4px] flex justify-center items-center flex-col">
        <button
          disabled={isGameStart}
          className="disabled:cursor-no-drop bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1"
          onClick={() => handleIncrementDecrement("increment")}
        >
          +
        </button>
        <button
          disabled={isGameStart}
          className="disabled:cursor-no-drop bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1"
        >
          MAX
        </button>
      </div>
    </div>
  );
};

export default MinMaxToggle;
