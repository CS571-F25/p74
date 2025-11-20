import { HashRouter, Route, Routes } from 'react-router'
import React, {useEffect, useState} from 'react'

import './App.css'
import Layout from './navigation/Layout'
import Cover from './navigation/pages/Cover'
import Front from './navigation/pages/Front'
import Contents from './navigation/pages/Contents'
import NoMatch from './navigation/pages/NoMatch'
import Bookmarks from './navigation/pages/Bookmarks'
import Logout from './navigation/pages/Logout'
import Feature from './navigation/pages/Feature'
import AddRecipe from './navigation/recipes/AddRecipe'
import AddImageRecipe from './navigation/recipes/AddImageRecipe'
import AddTextRecipe from './navigation/recipes/AddTextRecipe'
import AddUrlRecipe from './navigation/recipes/AddurlRecipe'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Cover/>} />
          <Route path="/front" element={<Front />}></Route>
          <Route path="/contents" element={<Contents />}></Route>
          <Route path="/feature" element={<Feature />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/add" element={<AddRecipe />}></Route>
          <Route path="/addImage" element={<AddImageRecipe />}></Route>
          <Route path="/addUrl" element={<AddUrlRecipe />}></Route>
          <Route path="/addText" element={<AddTextRecipe />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
