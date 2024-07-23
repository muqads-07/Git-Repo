// import { useState } from 'react'
import {Route, Routes } from "react-router-dom";
import Grid from "./pages/Grid";
import ItemsDetails from "./pages/ItemsDetails";


function App() {

  return (
  
      <Routes>
        <Route path='/items'  element={<Grid/>} />
        <Route path='/items/:id' element={<ItemsDetails/>} />
        </Routes>
  )
}

export default App
