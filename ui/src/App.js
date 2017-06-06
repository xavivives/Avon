import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VerticalNonLinear from './VerticalNonLinear';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

 var style = {
  marginRight: 20,
}; 

class App extends Component {

   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <MuiThemeProvider>
            <div>
            
                <FloatingActionButton secondary={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>

                <VerticalNonLinear/>

            </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
