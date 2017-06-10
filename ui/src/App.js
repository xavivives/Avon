import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Feed from './Feed';
import Creator from './Creator';
import Resolver from './Resolver';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

injectTapEventPlugin();


class App extends Component {
   
     constructor()
     {
        super();

        this.state = {
            currentPage:"Feed",
        };
    }
    
    onNewCommit = () =>
    {
       this.setState({
            currentPage: "Creator",    
        });
    }

    onResolve = (commitId) =>
    {
       this.setState({
            currentPage: "Resolver",
            commitId:commitId    
        });
    }


    onResolved = () =>
        {
           this.setState({
                currentPage: "Feed"  
            });
        }


    onLeftIconTap = () =>
    {
        if(this.state.currentPage === "Feed")
        {
            
        }
        else if (this.state.currentPage === "Creator")
        {
            this.setState({
                currentPage: "Feed",    
            });
        }

        else if (this.state.currentPage === "Resolver")
        {
            this.setState({
                currentPage: "Feed",    
            });
        }
    }

    onCommitmentCreated = ()=>
    {
        this.setState({
                currentPage: "Feed",    
            });
    }
  
  render() {

    var content =<Feed onNewCommit={this.onNewCommit} />;
    var icon = <IconButton><MenuIcon/></IconButton>;
    var title = "Let's get shit done!"

    if(this.state.currentPage === "Feed")
    {
        title = "Your commitments";
        content =<Feed onNewCommit={this.onNewCommit} onResolve={this.onResolve} />;
        //icon = <IconButton><MenuIcon/></IconButton>; 
        icon = <IconButton></IconButton>; 

    }
    else if (this.state.currentPage === "Creator")
    {
        title = "New commitment";
        content =<Creator onCommitmentCreated = {this.onCommitmentCreated}/>;
        icon = <IconButton><BackIcon/></IconButton>;
    }

    else if (this.state.currentPage === "Resolver")
    {
        title = "Resolve commitment";
        content =<Resolver onResolved = {this.onResolved}/>;
        icon = <IconButton><BackIcon/></IconButton>;
    }

    return (
      <div className="App">
        <MuiThemeProvider>
            <div>

                <AppBar title={title}
                onLeftIconButtonTouchTap = {this.onLeftIconTap}
                iconElementLeft={icon}/>

                <div style = {{padding:15}}>
                    {content}

                </div>

            </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
