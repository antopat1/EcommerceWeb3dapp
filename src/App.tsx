import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./states/store"; // Importa lo store Redux
import HomePage from "../src/pages/HomePage/HomePage";
import AboutScreen from "./pages/AboutHero/AboutScreen";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ContactScreen from "./pages/ContactHero/ContactScreen";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Footer from "./components/Footer/Footer";
import SingleArticleScreen from "./pages/SingleArticleScreen/SingleArticleScreen";

import SuccessPage from "./pages/SuccessPage/SuccessPage";

import "./index.css";

const App: React.FC = () => {
  
  console.log("✅ App.tsx montato!");
  return (
    <Provider store={store}> 
      <Router> 
        <Navbar />
        <Sidebar />      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contattaci' element={<ContactScreen />} />
          <Route path='/article/:id' element={<SingleArticleScreen />} />
          
          <Route path="/success/:id" element={<SuccessPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes> 
        <Footer />     
      </Router>
      
    </Provider>
  );
};

export default App;
