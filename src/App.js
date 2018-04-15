import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppRouter from './components/routers/AppRouter';
import store from './store';

import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  button: {
    textTransform: 'capitalize',
  }

});



class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <MuiThemeProvider theme={theme}>
                <AppRouter/>
            </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
