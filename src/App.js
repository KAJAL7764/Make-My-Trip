// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";
import { Search } from "./components/SearchPage/Search";



import { Mytrip } from "./components/Booking_page/Getdata";
import { Final } from "./components/Booking_page/InnerComponent/Final";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/search" exact element={<Search />} />

        <Route path="/checkout" exact element={<Mytrip />} />
        <Route path="/final" exact element={<Final />} />

        <Route path="/checkout" exact element={<Mytrip />} />

      </Routes>
    </div>
  );
}

export default App;
