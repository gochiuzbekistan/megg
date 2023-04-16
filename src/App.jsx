import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import { Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <footer>some things never change</footer>
    </div>
  );
}

export default App;
