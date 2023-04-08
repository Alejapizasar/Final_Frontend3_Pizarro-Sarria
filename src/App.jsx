import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ContextProvider } from "./Context/global.context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path ="/" element = {<Home/>}/>
              <Route path ="/detail/:id" element = {<Detail/>}/>
              <Route path ="/favorites" element = {<Favs/>}/>
              <Route path ="/contact" element = {<Contact/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;