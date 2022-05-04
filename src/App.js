import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Stoku} from './Stoku';
import {Personeli} from './Personeli';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch,NavLink} from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>

    <Navigation/>

    <Routes>
      <Route path='/' component={Home} exact/>
      <Route path='/personeli' component={Personeli}/>
      <Route path='/stoku' component={Stoku}/>

    </Routes>
    
     
    </div>
    </BrowserRouter>
  );
}

export default App;
