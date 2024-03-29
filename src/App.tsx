import "./App.css";
import Playground from "./components/playground";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen h-screen overflow-hidden w-full select-none">
      <div className="flex mx-auto h-full lg:w-[70%] w-full justify-center items-center">
        <div className="flex xl:flex-row flex-col-reverse w-full overflow-hidden xl:rounded-xl h-full xl:h-[750px]">
          <Sidebar />
          <Playground />
        </div>
      </div>
    </main>
  );
};

export default App;
