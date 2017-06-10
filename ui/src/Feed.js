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

class Feed extends React.Component
{

    constructor()
    {
        super();
        EthereumBridge.onContractLoaded().then(this.loadData);
 
        this.state = {"commitments" : []};
    }

    onResolve = (commitId) =>
    {
        this.props.onResolve(commitId);
    }

    onNewCommit = () =>
    {
        this.props.onNewCommit();
    }

    loadData = () =>
    {
        var that = this;
        EthereumBridge.GetNumberOfCommitments().then(function(number){
            EthereumBridge.getAllCommitmentsData(number).then(function(commitments){
                this.setState({
                    commitments: commitments,   
                });
        })}).catch(function(e){console.log(e);});
    }
  
  render()
  {

    var commitments = [];
    for (var i =0; i<this.state.commitments.length; i++)
    {
        commitments.push( <CommitCard data = {this.state.commitments[i]} onResolve = {this.onResolve}/>);
    }

    return (
      <div>

        <FloatingActionButton onTouchTap= {this.onNewCommit} secondary={true} style= {FloatingButtonStyle}>
            <ContentAdd />
        </FloatingActionButton>

        <div>
            {commitments}
        </div>      
      </div>
    );
  }
}

export default Feed;