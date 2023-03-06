import React from 'react';

import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from './components/parts/Header';
import Footer from './components/parts/Footer';
import Main from './components/parts/Main';
import Home from './components/pages/Home';

import QuizFinish from './components/pages/QuizFinish';
import Error404 from './components/pages/Error404';
import QuizPreparation from './components/pages/QuizPreparation';
import QuizPlay from './components/pages/QuizPlay';

import { stylesVariables } from './components/data/stylesVariables';

const App = () => {
  return (
    <>
      <GrobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/quiz/prepare/:categoryId" element={<QuizPreparation />} />
          <Route path="/quiz/play" element={<QuizPlay />} />
          <Route path="/quiz/finish" element={<QuizFinish />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

const GrobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${stylesVariables.colors.background};
    color: ${stylesVariables.colors.textDark};
    font-family: "Poppins", "Zen Maru Gothic";
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  a {
    color: ${stylesVariables.colors.textDark};
    font-family: "Poppins", "Zen Maru Gothic";
    text-decoration: none;
    cursor: pointer;
  }

  button {
    font-family: "Poppins", "Zen Maru Gothic";
    cursor: pointer;
  }
`;

export default App;
