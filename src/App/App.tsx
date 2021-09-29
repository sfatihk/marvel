import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

//screens
import HomeScreen from "../screens/home/HomeScreen";
import CharacterDetailScreen from "../screens/characterDetail/CharacterDetailScreen";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/characters/:id" component={CharacterDetailScreen} />
      </Router>
    </>
  );
}

export default App;
