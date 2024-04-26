import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MingaListPage from "./pages/MingaListPage/MingaListPage";
import MingaDetails from "./pages/MingaDetails/MingaDetails";
import PostMinga from "./pages/PostMinga/PostMinga";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<MingaListPage />} />
            <Route path="/details" element={<MingaDetails />} />
            <Route path="/post" element={<PostMinga />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
