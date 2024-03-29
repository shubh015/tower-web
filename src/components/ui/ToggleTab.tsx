import React from "react";
import { stages } from "../../utils";
import { useGameContext } from "../../context/towerContext";

interface LevelProps {
  level: {
    id: number;
    name: string;
    svg: JSX.Element;
  };
  isActive: boolean;
  onClick: (id: number) => void;
}

interface LevelTabProps {
  activeIndex: number;
  onClick: (id: number) => void;
}

const Toggle: React.FC<LevelProps> = ({ level, isActive, onClick }) => {
  const { isGameStart } = useGameContext();
  return (
    <button
      className={`flex gap-2 justify-center items-center p-2 flex-1 text-white font-bch uppercase disabled:cursor-no-drop ${
        isActive ? "bg-[#323232] rounded-lg" : ""
      }`}
      disabled={isGameStart}
      onClick={() => onClick(level.id)}
    >
      {level.svg}
      {level.name}
    </button>
  );
};

const ToggleTab: React.FC<LevelTabProps> = ({ activeIndex, onClick }) => {
  const { isGameStart } = useGameContext();
  return (
    <div
      className={`flex gap-1 bg-[#141414] p-0.5 rounded-lg ${
        isGameStart ? "brightness-75" : ""
      }`}
    >
      {stages.map((stages, index) => (
        <Toggle
          key={index}
          level={stages}
          isActive={index === activeIndex}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ToggleTab;
