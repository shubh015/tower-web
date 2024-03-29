import React from "react";
import ToggleTab from "../ui/ToggleTab";
import PlayButton from "../ui/PlayButton";
import MinMaxCounter from "../ui/MinMaxCounter";
import { useGameContext } from "../../context/towerContext";

const Sidebar: React.FC = () => {
  const { level, setLevel } = useGameContext();

  return (
    <div className="bg-[#202020] xl:w-[450px] min-w-[450px] w-full p-6">
        <ToggleTab activeIndex={level} onClick={setLevel} />
        <PlayButton />
        <MinMaxCounter />
      </div>
  );
};

export default Sidebar;
