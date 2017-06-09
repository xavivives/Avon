import React from 'react';

 
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EthereumBridge from './EthereumBridge';

class Creator extends React.Component {

    constructor() {
        super();
        EthereumBridge.startWatch();
        this.state = {
        };
    }

    onNewCommit = () => {

        this.props.onNewCommit();
    }

  
  render() {

    return (
      <div>
        <p>
            Seems you've never commited to anything yet...
            Why don't you try do something with your life by clicking the action button down below
        </p>

        
        <FloatingActionButton onTouchTap= {this.onNewCommit} secondary={true} >
            <ContentAdd />
        </FloatingActionButton>

            
      </div>
    );
  }
}

export default Creator;