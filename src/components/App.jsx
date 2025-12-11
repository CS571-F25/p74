import { HashRouter, Route, Routes } from 'react-router'
import React from 'react'

import './App.css'
import Layout from './navigation/Layout'
import Cover from './navigation/pages/Cover'
import Contents from './navigation/pages/Contents'
import NoMatch from './navigation/pages/NoMatch'
import Feature from './navigation/pages/Feature'
import AddRecipe from './navigation/recipes/AddRecipe'
import AddTextRecipe from './navigation/recipes/AddTextRecipe'
import RecipeDetails from './navigation/recipes/RecipeDetails'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Cover/>} />
          <Route path="/contents" element={<Contents />}></Route>
          <Route path="/feature" element={<Feature />}></Route>
          <Route path="/add" element={<AddRecipe />}></Route>
          <Route path="/addText" element={<AddTextRecipe />}></Route>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
