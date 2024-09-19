import React, { useState } from 'react';
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import {lightTheme} from "./utils/Themes"
import Home from './pages/Home';
import Authentications from './pages/Authentications';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import FoodDetails from './pages/FoodDetails';
import FoodListing from './pages/FoodListing';


const Container = styled.div``;


const App = () => {
  const [openAuth, setOpenAuth] = useState([false]);
  const [login, setLogin] = useState([false]);
  return (
    <>
    <ThemeProvider theme={lightTheme} >
    <BrowserRouter>
    <Container>
      <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth} />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/cart' exact element={<Cart/>} />
        <Route path='/favorite' exact element={<Favorites/>} />
        <Route path='/dishes/:id' exact element={<FoodDetails /> } />
        <Route path='/dishes' exact element={<FoodListing /> } />
      </Routes>
      {openAuth && <Authentications setOpenAuth={setOpenAuth} login={login} setLogin={setLogin} openAuth={openAuth}  />}
    </Container>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App