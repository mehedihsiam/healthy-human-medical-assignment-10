import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Header from './Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route to="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
