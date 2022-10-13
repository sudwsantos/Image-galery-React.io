import React from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header titulo="Galeria de imágenes con React"/>
      <Card titulo="Hello"/>
      <Footer />
    </div>
  );
}

export default App;
