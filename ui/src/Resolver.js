import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import EthereumBridge from './EthereumBridge';

const containerStyle =
{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center'
}

class Resolver extends React.Component {

    constructor(props) {
        super();

        this.state = {};
        var that = this;
        EthereumBridge.getCommitmentData(props.commitmentId).then(
            function (data)
            {
                console.log(data);
                that.setState({
                    commitmentData: data,  
                });
            });
    }

    onSucceeded = () =>
    {
        EthereumBridge.resolve(this.props.commitmentId, true);
        this.props.onResolved();
    };

    onFailed = () =>
    {
        EthereumBridge.resolve(this.props.commitmentId, false);
        this.props.onResolved();
    };


  render()
  {
    var networkStatus = <p style = {{'color':'#999999'}}> Fetching data...</p>;

    if(!this.state.commitmentData)
    {
        return(
            <div>
                {networkStatus} 
            </div>
        );
    }
    
    var question = "Did you succeeded in" + this.state.commitmentData.goal +"?";
    var withtdrawInfo = "If, you did, "+ this.state.commitmentData.amount  + " eth will be returned to your address,  otherwise they will be send to:"

    return (
      <div>
        <h3>
            {question}
        </h3>

        <p>
            {withtdrawInfo}
        </p>

        <p style = {{'color':'#999999'}}>
             {this.state.commitmentData.beneficiary}
        </p>


        <div style = {containerStyle}>
            <div>
                <RaisedButton
                  label = "Yes! I did"
                  secondary = {true}
                  onTouchTap = {this.onSucceeded}
                />
            </div> 

            <div>
                <RaisedButton
                  label = "Nope, I failed"
                  primary = {false}
                  onTouchTap = {this.onFailed}
                />
            </div>
        </div>

      </div>
    );
  }
}

export default Resolver;