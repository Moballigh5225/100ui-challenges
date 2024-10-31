import CardComponent from "./components/Card/Card";
import AddToBagComponent from "./components/AddToBag/AddToBag";

const App = () => {
  return (
    <div className=" flex w-full mnin-h-screen p-2 ">
      <CardComponent />
      <AddToBagComponent />
    </div>
  );
};

export default App;
