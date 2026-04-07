import MenuSideBar from "./components/common/MenuSideBar";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <div className="flex">
      <MenuSideBar role="provider" />
      <NavBar/>
    </div>
  );
};

export default App;
