import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import BlogIndex from "./components/BlogIndex";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Message from "./components/Message";
import EditPost from "./components/EditPost";
import StrumentiMusicali from "./components/StrumentiMusicali";
import Contatti from "./components/Contatti";
// import FileUpload from "./components/FileUpload";
import LoginRegisterLogout from "./components/LoginRegisterLogout";
// import Navblog from "./components/Navblog";
// import { DataProvider } from './context/DataContext';
// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import api from './api/posts';
// import useWindowSize from './hooks/useWindowSize';
// import useAxiosFetch from './hooks/useAxiosFetch';
import SomethingWrong from "./components/SomethingWrong";
import MessageIndex from "./components/MessageIndex";
import MessagePage from "./components/MessagePage";
import { DataProvider } from "./context/DataContext";
import { DataMessageProvider } from "./context/DataMessageContext";
function App() {
  // const [log, setLog] = useState("logreg");
  // console.log(log);

  // const loginState = (e) => {
  //   setLog(e);
  // };
  return (
    <>
      <Router>
        <NavBar />

        <DataProvider>
          <Routes>
            <Route path="/blogIndex" element={<BlogIndex />} />"
            <Route path="/NewPost" element={<NewPost />} />"
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />

          </Routes>
        </DataProvider>
        
        <DataMessageProvider>
          <Routes>
            <Route path="/messageIndex" element={<MessageIndex />} />"
            <Route path="/contatti" element={<Contatti />} />"
            <Route path="/message/:messageId" element={<MessagePage />} />"
          </Routes>
        </DataMessageProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ImageSlider" element={<ImageSlider />} />
          <Route path="/missing" element={<Missing />} />"
          <Route path="/About" element={<About />} />"
          <Route
            path="/loginRegisterLogout"
            element={<LoginRegisterLogout />}
          />
          
          <Route path="/SomethingWrong" element={<SomethingWrong />} />"
          {/* <Route path="/*" element={<SomethingWrong />} />" */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
