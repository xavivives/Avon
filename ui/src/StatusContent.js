import React from 'react';
import EthereumBridge from './EthereumBridge';

const addressStyle =
{
    color: 'rgb(153, 153, 153)',
    fontSize: '0.85em'
}

class StatusContent extends React.Component {

    constructor(props) {
        super();


        this.state = {
            'userAddress':EthereumBridge.GetDefaultAddress(),
            'userBalance':EthereumBridge.GetBalance(EthereumBridge.GetDefaultAddress())
        };
    }

    render()
    {
        return (          
            <div>
                <p>
                    Your current address
                </p>
                <p style={addressStyle}>
                    {this.state.userAddress}
                </p> 

                <p>
                    {this.state.userBalance}
                </p> 
            </div>
                    
        );
    }
}

export default StatusContent;