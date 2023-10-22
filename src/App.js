import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutGeta from "./pages/AboutGeta";
import EventAll from "./pages/EventAll";
import AllGallery from "./pages/AllGallery";
import Donet from "./pages/Donet";
import Dashboard from "./pages/Admin/Dashboard";
import Gallery from "./pages/Admin/Gallery";
import News from "./pages/Admin/News";
import Testimonial from "./pages/Admin/Testimonial";
import Event from "./pages/Admin/Event";
import Login from "./pages/Admin/Login";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/about"} element={<AboutGeta />} />
      <Route path={"/event"} element={<EventAll />} />
      <Route path={"/gallery"} element={<AllGallery />} />
      <Route path={"/donation"} element={<Donet />} />
      <Route path={"/admin-login"} element={<Login />} />
      <Route path={"/admin-dashboard"} element={<Dashboard />} />
      <Route path={"/admin-gallery"} element={<Gallery />} />
      <Route path={"/admin-news"} element={<News />} />
      <Route path={"/admin-testimonial"} element={<Testimonial />} />
      <Route path={"/admin-event"} element={<Event />} />
    </Routes>
  );
}

export default App;
