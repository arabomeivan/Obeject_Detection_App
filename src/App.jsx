import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="container mx-auto mt-10 px-4">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
