import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import CampersDetailPage from "./pages/CampersDetailPage/CampersDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "./redux/campers/operations.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CampersDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
