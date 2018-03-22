import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HomeIcon from 'material-ui-icons/Home'
import theme from './config/theme'

import Home from './Home'
import './index.css'

const App = (
  <MuiThemeProvider muiTheme={theme}>
    <Router>
      <div>
        <Home navIcon1={<HomeIcon/>}/>
        {/*<hr/>*/}
        {/*<Home navIcon1={<AddCircleIcon/>}/>*/}
      </div>
    </Router>
  </MuiThemeProvider>
)
ReactDOM.render(App, document.getElementById('root'));

