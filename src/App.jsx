import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import { Route } from "wouter";
import images from "./data";
import AppStyled from "./App.styled";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <AppStyled>
      <ScrollToTop />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/gallery">
        <Gallery images={images} />
      </Route>
      <footer className="info-card">
        By{" "}
        <a href="https://github.com/Meggoo" target="_blank">
          @Meggoo
        </a>
      </footer>
    </AppStyled>
  );
}

export default App;
