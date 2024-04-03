import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import '../src/scss/General.scss';
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Partner from "./pages/Partner";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="partner" element={<Partner />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Outlet/>
    </BrowserRouter>
  );
}

export default App;
