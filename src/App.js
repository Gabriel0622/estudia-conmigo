import { Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Components/Layout/Header";
import User from "./Components/User"
import Routes from "./Routes"



function App() {


  return (
    <Fragment>
    <Router>
      <CssBaseline/>
      <Header>
      <User/>    
      </Header>
      <Routes/>
    </Router>

   
    </Fragment>
  );
}

export default App;
