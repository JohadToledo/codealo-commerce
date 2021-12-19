
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js'
import Producto from './components/Producto.js'
import Footer from './Footer'
import Home from './components/Home.js';



function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        
        
        
      </header>
      <div><Navbar /></div>
      <div><Home /></div>
      <div><Producto name="Calcetis"/></div>
      <div><Producto name="Calceta"/></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
