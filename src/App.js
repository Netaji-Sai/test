import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header.js";
import {Footer} from './Components/Footer.js';
import {Nav} from './Components/Nav.js';
function App() {
  return (
    <div>
      <Header></Header>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
