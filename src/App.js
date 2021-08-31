import Navbar from './components/Navbar';
import './components/Navbar.css';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Register}>
          <Register />
        </Route>
        <Route path="/signin" component={SignIn}>
          <SignIn />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  

  );
}

export default App;
