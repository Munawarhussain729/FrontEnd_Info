import logo from './logo.svg';
import './App.css';
import SimpleRedux from './Components/SimpleRedux';
import CartReduxPage from './Components/CartReduxPage'; 
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './PageNotFound';
function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<SimpleRedux/>}/>
          <Route exact path='/cart-mode' element={<CartReduxPage/>}/>
          <Route exact path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
