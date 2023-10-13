import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutGeta from "./pages/AboutGeta";
import EventAll from "./pages/EventAll";
import AllGallery from "./pages/AllGallery";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/about"} element={<AboutGeta />} />
      <Route path={"/event"} element={<EventAll />} />
      <Route path={"/gallery"} element={<AllGallery />} />
    </Routes>
  );
}

export default App;
