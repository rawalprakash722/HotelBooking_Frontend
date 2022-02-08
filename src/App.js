import logo from './logo.svg';
import './App.css';
import 'jquery'
import {BrowserRouter} from 'react-router-dom'   //for routing
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/header'
import Footer from './Header/footer'
import Container from './Container/Container'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    <Container></Container>
    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
