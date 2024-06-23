import ListItems from "../Utils/ListItems";
import Search from "../Utils/searchPulsa";
import Indosat from "./Profider/Kuota/Indosat";

const Home = () => {
  return (
    <div>
      <Search />
      <ListItems />
      <Indosat />
    </div>
  );
};

export default Home;
