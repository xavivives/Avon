import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Creator from './Creator';
import injectTapEventPlugin from 'react-tap-event-plugin';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import AppBar from 'material-ui/AppBar';
import CurrencyUtils from './CurrencyUtils';

injectTapEventPlugin();
 var style = {
  marginRight: 20,
}; 


/*
<FloatingActionButton secondary={true} style={style}>
                        <ContentAdd />
                    </FloatingActionButton>*/




class App extends Component {
   
  render() {

    CurrencyUtils.getEtherPrice();

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
