import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Header from './Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';
import Footer from './Shared/Footer/Footer';
import Appointment from './Pages/Booking/Appointment/Appointment';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/Details/ServiceDetails/ServiceDetails';
import Register from './Pages/Register/Register';
import AuthProvider from './context/authProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
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
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/serviceDetails/:serviceID">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/appointment/:appointmentID">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
