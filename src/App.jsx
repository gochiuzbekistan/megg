import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import { Route, Link } from "wouter";
import images from "./data";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/gallery">
        <Gallery images={images} />
      </Route>
      <footer>some things never change</footer>
    </div>
  );
}

export default App;
