// import Home from "./Components/home";
import Home from "./Coba/components/Home";
// import Search from "./Utils/searchPulsa";
// import Card from "./Utils/card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Eror from "./Coba/atoms/Eror";
import Cover from "./Coba/atoms/Cover/Cover";
import Dompet from "./Coba/components/Dompet";
import Topup from "./Coba/components/Topup";
import CoverDompet from "./Coba/atoms/Cover/CoverDompet";
import CoverTopup from "./Coba/atoms/Cover/CoverTopup";

const App = () => {
  return (
    <>
      <div
        data-theme="garden"
        className="h-screen absolute w-screen overflow-scroll overflow-x-hidden tablet:hidden"
      >
        {/* <Search />
      <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Eror />} />
            <Route path="/" element={<Home />} />
            <Route path="/cover/:providerName" element={<Cover />} />
            <Route path="/dompet" element={<Dompet />} />
            <Route path="/topup" element={<Topup />} />
            <Route
              path="/coverDompet/:providerName"
              element={<CoverDompet />}
            />
            <Route path="/coverTopup/:providerName" element={<CoverTopup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
