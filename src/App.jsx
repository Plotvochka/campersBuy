import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import CampersDetailPage from "./pages/CampersDetailPage/CampersDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<HomePage />} />

            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CampersDetailPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
