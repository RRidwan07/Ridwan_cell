import Home from "./Coba/components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Cover from "./Coba/atoms/Cover/Cover";
import Dompet from "./Coba/components/Dompet";
import Topup from "./Coba/components/Topup";
import CoverDompet from "./Coba/atoms/Cover/CoverDompet";
import CoverTopup from "./Coba/atoms/Cover/CoverTopup";
import Pulsa from "./Coba/components/Pulsa";

const App = () => {
  return (
    <>
      <div
        data-theme="garden"
        className="h-screen absolute w-screen overflow-scroll overflow-x-hidden tablet:hidden"
      >
        {/* <Search />
      <Home /> */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<Eror />} /> */}
            <Route path="/cover/:providerName" element={<Cover />} />
            <Route path="/dompet" element={<Dompet />} />
            <Route path="/topup" element={<Topup />} />
            <Route path="/pulsa" element={<Pulsa />} />
            <Route
              path="/coverDompet/:providerName"
              element={<CoverDompet />}
            />
            <Route path="/coverTopup/:providerName" element={<CoverTopup />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
};

export default App;
