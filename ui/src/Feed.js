import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EthereumBridge from './EthereumBridge';
import CommitCard from './CommitCard';

const FloatingButtonStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex:100
};

class Creator extends React.Component {

    constructor() {
        super();
        //EthereumBridge.startWatch();

        var fakeTime= (Date.now()/1000)+(60*5);
        console.log(fakeTime);
        
        this.state = {
            "fakeTime" : fakeTime
        };  
    }

    onNewCommit = () => {

        this.props.onNewCommit();
    }

    onResolve = (commitId) => {

        this.props.onResolve(commitId);
    }

  
  render() {

    return (
      <div>

        <FloatingActionButton onTouchTap= {this.onNewCommit} secondary={true} style= {FloatingButtonStyle}>
            <ContentAdd />
        </FloatingActionButton>

        <div>
            <CommitCard commitId = {0} onResolve = {this.onResolve} goal="Fly around the world 3 times" endTimestamp= {this.state.fakeTime} state="ongoing"/>
            <CommitCard commitId = {1} onResolve = {this.onResolve} goal="Arrive to mars" endTimestamp= {this.state.fakeTime-5600} state="ongoing" />
            <CommitCard commitId = {2} onResolve = {this.onResolve} goal="Do the loundry" endTimestamp= {this.state.fakeTime-50000} state="ongoing" />
            <CommitCard commitId = {3} onResolve = {this.onResolve} goal="Fly around the world 3 times" endTimestamp= {this.state.fakeTime} state="ongoing"/>
            <CommitCard commitId = {4} onResolve = {this.onResolve} goal="Arrive to mars" endTimestamp= {this.state.fakeTime-5600} state="ongoing" />
            <CommitCard commitId = {5} onResolve = {this.onResolve} goal="Do the loundry" endTimestamp= {this.state.fakeTime-50000} state="ongoing" />
            <CommitCard commitId = {6} onResolve = {this.onResolve} goal="Fly around the world 3 times" endTimestamp= {this.state.fakeTime} state="ongoing"/>
            <CommitCard commitId = {7} onResolve = {this.onResolve} goal="Arrive to mars" endTimestamp= {this.state.fakeTime-5600} state="succeeded" />
            <CommitCard commitId = {8} onResolve = {this.onResolve} goal="Do the loundry" endTimestamp= {this.state.fakeTime-50000} state="failed" />
            <CommitCard commitId = {9} onResolve = {this.onResolve} goal="Fly around the world 3 times" endTimestamp= {this.state.fakeTime} state="ongoing"/>
            <CommitCard commitId = {10} onResolve = {this.onResolve} goal="Arrive to mars" endTimestamp= {this.state.fakeTime-5600} state="ongoing" />
            <CommitCard commitId = {11} onResolve = {this.onResolve} goal="Do the loundry" endTimestamp= {this.state.fakeTime-50000} state="ongoing" />
        </div>      
      </div>
    );
  }
}

export default Creator;