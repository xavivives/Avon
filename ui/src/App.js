import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import Feed from './Feed';
import Creator from './Creator';
import BackIcon from './BackIcon.svg';
import MenuIcon from './MenuIcon.svg';

import IconButton from 'material-ui/IconButton';

injectTapEventPlugin();

 var style = {
  marginRight: 20,
}; 

class App extends Component {
   
     constructor() {
        super();

        this.state = {
            currentPage:"Feed"
        };
    }
    
    onNewCommit = () =>
    {
       this.setState({
            currentPage: "Creator",    
        });
    };


    onLeftIconTap = () =>
    {
        console.log("tap");
        if(this.state.currentPage == "Feed")
        {
            
        }
        else if (this.state.currentPage == "Creator")
        {
            this.setState({
                currentPage: "Feed",    
            });
        }
    }
  
  render() {

    var  style = {
      padding: 20
    };

    var content =<Feed onNewCommit={this.onNewCommit} />;
    var icon = <IconButton>{MenuIcon}</IconButton>;

    if(this.state.currentPage == "Feed")
    {
        content =<Feed onNewCommit={this.onNewCommit} />;
        icon = <IconButton>{MenuIcon}</IconButton>; 
    }
    else if (this.state.currentPage == "Creator")
    {
        content =<Creator/>;
        icon = <IconButton>{BackIcon}</IconButton>;
    }

    return (
      <div className="App">
        <MuiThemeProvider>
            <div>

                <AppBar title="Set a goal"
                onLeftIconButtonTouchTap = {this.onLeftIconTap}
                iconElementLeft={icon}/>

                <div style = {style}>
                    {content}

                </div>

            </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
