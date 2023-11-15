import logo from './logo.svg';
import './App.css';
import Home from './components/views/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from './components/views/Contact';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Navbar from './container/Navbar/Navbar';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
