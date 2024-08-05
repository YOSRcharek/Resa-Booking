import './App.css';
import Footer from './components/Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <br />
      <Footer />
    </div>
  );
}

export default App;

