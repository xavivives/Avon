import React from 'react';

 
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EthereumBridge from './EthereumBridge';
import CommitCard from './CommitCard';

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

  
  render() {

    return (
      <div>
    
        <CommitCard goal="Fly around the world 3 times" endTimestamp= {this.state.fakeTime} state="ongoing"/>
        <CommitCard goal="Arrive to mars" endTimestamp= {this.state.fakeTime-5600} state="ongoing" />
        <CommitCard goal="Do the loundry" endTimestamp= {this.state.fakeTime-50000} state="ongoing" />
        
        <FloatingActionButton onTouchTap= {this.onNewCommit} secondary={true} >
            <ContentAdd />
        </FloatingActionButton>

            
      </div>
    );
  }
}

export default Creator;