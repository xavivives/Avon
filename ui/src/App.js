import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import Creator from './Creator';

injectTapEventPlugin();
 var style = {
  marginRight: 20,
}; 

class App extends Component {
   
  render() {

    var  style = {
      padding: 20
    };

    return (
      <div className="App">
        <MuiThemeProvider>
            <div>

                <AppBar title="Set a goal"iconClassNameRight="muidocs-icon-navigation-expand-more"/>

                <div style = {style}>
                    <Creator/>

                    
                </div>

            </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
