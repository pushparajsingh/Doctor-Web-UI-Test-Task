import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoute";
import Layout from "../components/layout/Layout";

const IndexRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Home />
              </PublicRoutes>
            }
          />
          <Route
            path="/private"
            element={
              <PrivateRoutes>
                <>Private Routes</>
              </PrivateRoutes>
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default IndexRoutes;
