import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Post } from "./components/Pages/Post";
import { Registers } from "./components/Pages/Registers";
import { AddClub } from "./components/Pages/AddClub";
import { ClubLeads } from "./components/Pages/ClubLeads";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addclub" element={<AddClub />} />
            <Route path="/post" element={<Post />} />
            <Route path="/registers" element={<Registers />} />
            <Route path="/clubleads" element={<ClubLeads />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
