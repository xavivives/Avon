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

    constructor() {
        super();
        this.state = {};
        //EthereumBridge.GetCommitmentData(this.props.commitmentId);
    }

    onSucceeded = () =>
    {
        //EthereumBridge.Resolve(this.props.commitmentId, true);
        this.props.onResolved();
    };

    onFailed = () =>
    {
        //EthereumBridge.Resolve(this.props.commitmentId, false);
        this.props.onResolved();

    };


  render() {

    return (
      <div>
        <h3>
            Did you succeeded to fly around the world?
        </h3>

        <p>
            If, you did, 10 eth will be returned to your address,
            otherwise they will be send to:
        </p>

        <p style = {{'color':'#999999'}}>
             0xcD5370578a6C99B6D1f78f6A1131EB25d7b64FD5
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
                  primary = {true}
                  onTouchTap = {this.onFailed}
                />
            </div>
        </div>

      </div>
    );
  }
}

export default Resolver;