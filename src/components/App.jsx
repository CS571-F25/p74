import { HashRouter, Route, Routes } from "react-router";
import React from "react";

import "./App.css";
import Layout from "./navigation/Layout";
import Cover from "./navigation/pages/Cover";
import Contents from "./navigation/pages/Contents";
import NoMatch from "./navigation/pages/NoMatch";
import Feature from "./navigation/pages/Feature";
import AddRecipe from "./navigation/recipes/AddRecipe";
import AddTextRecipe from "./navigation/recipes/AddTextRecipe";
import AddurlRecipe from "./navigation/recipes/AddurlRecipe";
import RecipeDetails from "./navigation/recipes/RecipeDetails";
import AddImageRecipe from "./navigation/recipes/AddImageRecipe";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Cover />} />

          {/* All recipes */}
          <Route path="/contents" element={<Contents />} />

          {/* Featured */}
          <Route path="/feature" element={<Feature />} />

          {/* Add recipe menu */}
          <Route path="/add" element={<AddRecipe />} />

          {/* Add text recipe */}
          <Route path="/addText" element={<AddTextRecipe />} />

          {/* Add URL recipe */}
          <Route path="/addurl" element={<AddurlRecipe />} />

          {/* Single recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Add image recipe */}
          <Route path="/addImage" element={<AddImageRecipe />} />

          {/* Fallback */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
