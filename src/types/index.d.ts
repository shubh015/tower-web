interface TowerContextProps {
    isGameStart: boolean;
    setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    blockCount: number;
    setBlockCount: React.Dispatch<React.SetStateAction<number>>;
    activeWindow: number;
    setActiveWindow: React.Dispatch<React.SetStateAction<number>>;
    blockList: Block[];
    setBlockList: React.Dispatch<React.SetStateAction<Block[]>>;
    handleGameOverAndStart: () => void;
    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
  }
  
  interface Block {
    id: number;
    type: "skull" | "coin";
    isShow: boolean;
  }
  