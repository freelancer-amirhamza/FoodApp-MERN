import React, { useState } from 'react';
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import {lightTheme} from "./utils/Themes"
import Home from './pages/Home';
import Authentications from './pages/Authentications';


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
      </Routes>
      {openAuth && <Authentications setOpenAuth={setOpenAuth} login={login} setLogin={setLogin} openAuth={openAuth}  />}
    </Container>
    </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App